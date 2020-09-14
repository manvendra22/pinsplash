import React from 'react'
import { Link } from 'react-router-dom'
import {
    Masonry,
    useInfiniteLoader,
} from 'masonic'
import { useDebounceCallback } from '@react-hook/debounce'

import './ImageGrid.scss'

const dpr = window.devicePixelRatio;

export default function ImageGrid({ fetchMoreData, data }) {
    const maybeLoadMore = useInfiniteLoader(function () {
        fetchMoreData()
    }, {
        // threshold: 1,
        minimumBatchSize: 30
    })

    const debouncedCallback = useDebounceCallback(maybeLoadMore, 300)

    return (
        <Masonry
            items={data}
            columnGutter={16}
            columnWidth={240}
            overscanBy={1}
            render={ImageGrids}
            onRender={debouncedCallback}
        />
    )
}

const ImageGrids = ({ data: { id, urls, color, width, height }, width: widthT }) => {
    const heightT = height / width * widthT;

    return <div style={{ background: color, borderRadius: '15px', height: heightT }} >
        <Link to={`/images/${id}`} className="image-link">
            <img alt="" src={`${urls.raw}q=75&auto=format&w=${widthT}&dpr=${dpr}&fit=max`} loading="lazy" />
        </Link>
    </div >
};