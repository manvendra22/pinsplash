import React from 'react'
import {
    Masonry,
    useInfiniteLoader,
} from 'masonic'
import { useDebounceCallback } from '@react-hook/debounce'

import ImageBox from '../ImageBox/ImageBox'

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
            columnGutter={12}
            columnWidth={240}
            overscanBy={1}
            render={ImageGrids}
            onRender={debouncedCallback}
        />
    )
}

const ImageGrids = ({ data: { id, urls, color, width, height }, width: widthT }) => {
    const heightT = height / width * widthT;

    return <div style={{ background: color, borderRadius: '20px', height: heightT }} >
        <ImageBox key={id} id={id} url={`${urls.raw}q=75&auto=format&w=${widthT}&dpr=${dpr}&fit=max`} />
    </div >
};