import React from 'react'
import {
    Masonry,
    useInfiniteLoader,
} from 'masonic'

import ImageBox from '../ImageBox/ImageBox'

export default function ImageGrid({ fetchMoreData, data }) {

    let showData = [] // Fix this logic, find alternative
    data.forEach(page => {
        showData.push(...page.result)
    })

    const maybeLoadMore = useInfiniteLoader(fetchMoreData, {
        isItemLoaded: (index, items) => !!items[index],
    })

    return (
        <Masonry
            items={showData}
            columnGutter={8}
            render={ImageGrids}
            onRender={maybeLoadMore}
        />
    )
}

const ImageGrids = ({ data: { id, urls } }) => {
    return < ImageBox key={id} id={id} url={urls.small} />
};

