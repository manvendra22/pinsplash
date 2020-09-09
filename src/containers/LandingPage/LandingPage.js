import React from 'react'
import Masonry from 'react-masonry-css'

import "./LandingPage.scss"

import Header from '../../components/Header/Header'
import ImageBox from '../../components/ImageBox/ImageBox'


export default function LandingPage() {
    return (
        <main>
            <Header />
            <Masonry
                breakpointCols={3}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                <ImageBox url="https://dummyimage.com/300x400" />
                <ImageBox url="https://dummyimage.com/300x200" />
                <ImageBox url="https://dummyimage.com/300x500" />
                <ImageBox url="https://dummyimage.com/300x600" />
                <ImageBox url="https://dummyimage.com/300x400" />
                <ImageBox url="https://dummyimage.com/300x400" />
                <ImageBox url="https://dummyimage.com/300x200" />
                <ImageBox url="https://dummyimage.com/300x500" />
                <ImageBox url="https://dummyimage.com/300x600" />
                <ImageBox url="https://dummyimage.com/300x400" />
            </Masonry>
        </main>
    )
}