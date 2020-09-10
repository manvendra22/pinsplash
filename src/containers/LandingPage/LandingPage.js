import React from 'react'
import Masonry from 'react-masonry-component';

import "./LandingPage.scss"

import Header from '../../components/Header/Header'
import ImageBox from '../../components/ImageBox/ImageBox'

import { useImages } from '../../utility'

export default function LandingPage() {
    const { status, data, error, isFetching } = useImages();

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
                className="masonry-grid"
            >
                {data.map(image =>
                    <ImageBox key={image.id} id={image.id} url={image.urls.raw + 'q=75&fm=jpg&w=300&fit=max'} />
                )}
            </Masonry>
        </main>
    )
}

