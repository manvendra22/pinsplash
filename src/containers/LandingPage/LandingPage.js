import React from 'react'
import Masonry from 'react-masonry-css'

import "./LandingPage.scss"

import Header from '../../components/Header/Header'
import ImageBox from '../../components/ImageBox/ImageBox'

import { useImages, useImage } from '../../utility'

const breakpointColumnsObj = {
    default: 4,
    1200: 3,
    700: 2,
    500: 1
};

export default function LandingPage() {
    const { status, data, error, isFetching } = useImages();

    console.log(status, data)

    if (status === "loading") {
        return "Loading..."
    }

    if (status === "error") {
        return <span>Error: {error.message}</span>
    }

    return (
        <main>
            <Header />
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {data.map(image =>
                    <ImageBox url={image.urls.raw + 'q=75&fm=jpg&w=300&fit=max'} />
                )}
            </Masonry>
        </main>
    )
}

