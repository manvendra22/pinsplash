import React from 'react'
// import Masonry from 'react-masonry-css'
import StackGrid from "react-stack-grid";

import "./LandingPage.scss"

import Header from '../../components/Header/Header'
import ImageBox from '../../components/ImageBox/ImageBox'

export default function LandingPage() {
    return (
        <main>
            <Header />
            <StackGrid
                columnWidth={300}
                gutterWidth={20}
                gutterHeight={30}
                className="image-grid"
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
            </StackGrid>
        </main>
    )
}