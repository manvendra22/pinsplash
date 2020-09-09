import React from 'react'

import "./Landing.scss"

import SearchBar from '../../components/SearchBar/SearchBar'
import ImageBox from '../../components/ImageBox/ImageBox'


export default function () {
    return (
        <main>
            <header>
                <SearchBar />
            </header>
            <section className="image-container">
                <ImageBox url="https://dummyimage.com/300x400" />
                <ImageBox url="https://dummyimage.com/300x400" />
                <ImageBox url="https://dummyimage.com/300x400" />
                <ImageBox url="https://dummyimage.com/300x400" />
                <ImageBox url="https://dummyimage.com/300x400" />
            </section>
        </main>
    )
}