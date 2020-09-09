import React from 'react'
import { Link } from 'react-router-dom'

import "./ImageDetails.scss"

import ImageBox from '../../components/ImageBox/ImageBox'


export default function ImageDetails() {
    return (
        <main className="imageDetails">
            <Link className="link" to="/">&larr; Back</Link>
            <section className="image">
                <ImageBox url="https://dummyimage.com/800x600" />
            </section>
            <section className="details">
                <div></div>
                <div className="btns">
                    <button className="btn btn-secondary">Download</button>
                    <button className="btn btn-tertiary">Share</button>
                </div>
            </section>
        </main>
    )
}