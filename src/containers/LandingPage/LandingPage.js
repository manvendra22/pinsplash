import React, { useRef } from 'react'
import Masonry from 'react-masonry-component';

import "./LandingPage.scss"

import Header from '../../components/Header/Header'
import ImageBox from '../../components/ImageBox/ImageBox'

import { useImages } from '../../utility/query'
import useIntersectionObserver from '../../utility/useIntersectionObserver'


export default function LandingPage() {
    const nextPage = useRef(1)

    const {
        status,
        data,
        error,
        fetchMore,
        canFetchMore
        // isFetching,
        // isFetchingMore,
    } = useImages();

    const targetRef = useRef()

    useIntersectionObserver({
        target: targetRef,
        onIntersect: fetchMoreData,
        enabled: canFetchMore,
    })

    if (status === "loading") {
        return "Loading..."
    }

    if (status === "error") {
        return <span>Error: {error.message}</span>
    }

    function fetchMoreData() {
        console.log("Called")
        fetchMore(nextPage.current + 1)
        nextPage.current = nextPage.current + 1
    }

    return (
        <main>
            <Header />

            <Masonry
                className="masonry-grid"
            >
                {data.map(page =>
                    page.map(image =>
                        <ImageBox key={image.id} id={image.id} url={image.urls.raw + 'q=75&fm=jpg&w=300&fit=max'} />
                    )
                )}
                <div ref={targetRef}>Load More</div>
            </Masonry>
        </main >
    )
}

