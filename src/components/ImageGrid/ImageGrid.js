import React from 'react'
import { Masonry, useInfiniteLoader } from 'masonic'

import ImageBox from '../ImageBox/ImageBox'

export default function ImageGrid({ fetchMoreData, data }) {

    let showData = []
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
    return < ImageBox key={id} id={id} url={urls.raw + 'q=75&fm=jpg&w=500&fit=max'} />
};

