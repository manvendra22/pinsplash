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

    const maybeLoadMore = useInfiniteLoader(fetchMoreData, {
        isItemLoaded: (index, items) => !!items[index], // TODO: Check this logic, working
    })

    return (
        <Masonry
            items={showData}
            columnGutter={12}
            columnWidth={240}
            render={ImageGrids}
            onRender={maybeLoadMore}
        />
    )
}

const ImageGrids = ({ data: { id, urls, color, width, height }, width: widthT }) => {
    // const aspectRatio = width / height;

    // const heightT = widthT * aspectRatio

    // return <div style={{ background: color }} >
    return <ImageBox key={id} id={id} url={urls.raw + 'q=75&fm=jpg&w=480&fit=max'} />
    // </div >
};