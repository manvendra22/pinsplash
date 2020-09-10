import React, { useRef } from 'react'
import Masonry from 'react-masonry-component';
import InfiniteScroll from 'react-infinite-scroller';

import "./LandingPage.scss"

import Header from '../../components/Header/Header'
import ImageBox from '../../components/ImageBox/ImageBox'

import { useImages } from '../../utility/query'


export default function LandingPage() {
    const nextPage = useRef(1)

    const {
        status,
        data,
        error,
        fetchMore,
        // canFetchMore
    } = useImages();

    if (status === "loading") {
        return "Loading..."
    }

    if (status === "error") {
        return <span>Error: {error.message}</span>
    }

    function fetchMoreData() {
        fetchMore(nextPage.current + 1)
        nextPage.current = nextPage.current + 1
    }

    return (
        <main>
            <Header />

            <InfiniteScroll
                pageStart={0}
                loadMore={fetchMoreData}
                hasMore={true || false}
                loader={<div className="loader" key={0}>Loading ...</div>}
            >
                <Masonry
                    className="masonry-grid"
                >
                    {data.map(page =>
                        page.map(image =>
                            <ImageBox key={image.id} id={image.id} url={image.urls.raw + 'q=75&fm=jpg&w=500&fit=max'} />
                        )
                    )}
                </Masonry>
            </InfiniteScroll>
        </main >
    )
}

