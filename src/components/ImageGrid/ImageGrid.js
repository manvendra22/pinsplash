import React from 'react'
import {
    Masonry,
    useInfiniteLoader,
} from 'masonic'

import ImageBox from '../ImageBox/ImageBox'

export default function ImageGrid({ fetchMoreData, data }) {
    let showData = data.flatMap(page => {
        return page.result
    })

    const maybeLoadMore = useInfiniteLoader(function () {
        fetchMoreData()
    }, {
        threshold: 1,
        minimumBatchSize: 30
    })

    return (
        <Masonry
            items={showData}
            columnGutter={12}
            columnWidth={240}
            overscanBy={1}
            render={ImageGrids}
            onRender={maybeLoadMore}
        />
    )
}

const ImageGrids = ({ data: { id, urls, color, width, height }, width: widthT }) => {
    const heightT = height / width * widthT;

    return <div style={{ background: color, borderRadius: '20px', height: heightT }} >
        <ImageBox key={id} id={id} url={urls.raw + 'q=75&fm=jpg&w=720&fit=max'} />
    </div >
};