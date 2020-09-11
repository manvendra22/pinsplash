import React from 'react'
import Masonry from 'react-masonry-component';
import InfiniteScroll from 'react-infinite-scroller';

import "./ImageGrid.scss"

import ImageBox from '../../components/ImageBox/ImageBox'

export default function ImageGrid({ fetchMoreData, data }) {

    return (
        <InfiniteScroll
            // pageStart={0}
            loadMore={fetchMoreData}
            hasMore={true || false}
        // loader={<div className="loader" key={0}>Loading ...</div>}
        >
            <Masonry
                className="masonry-grid"
            >
                {data.map(page =>
                    page.result.map(image =>
                        <ImageBox key={image.id} id={image.id} url={image.urls.raw + 'q=75&fm=jpg&w=500&fit=max'} />
                    )
                )}
            </Masonry>
            {/* <button onClick={fetchMoreData}>Fetch</button> */}
        </InfiniteScroll>
    )
}

