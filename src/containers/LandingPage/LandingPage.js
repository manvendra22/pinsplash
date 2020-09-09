import React from 'react'
import Masonry from 'react-masonry-css'

import "./LandingPage.scss"

import Header from '../../components/Header/Header'
import ImageBox from '../../components/ImageBox/ImageBox'

const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
};

export default function LandingPage() {
    return (
        <main>
            <Header />
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
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