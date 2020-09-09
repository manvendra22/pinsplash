import React from 'react'

import "./ImageDetails.scss"

import ImageBox from '../../components/ImageBox/ImageBox'


export default function () {
    return (
        <main>
            <section className="image-container">
                <ImageBox url="https://dummyimage.com/800x600" />
            </section>
            <section className="image-details">
                Image Details here
            </section>
        </main>
    )
}