import React from 'react'
import { Link, useParams } from 'react-router-dom'

import "./ImageDetails.scss"

import ImageBox from '../../components/ImageBox/ImageBox'

import { useImage } from '../../utility'


export default function ImageDetails() {
    let { id } = useParams();
    const { status, data, error, isFetching } = useImage(id);

    if (status === "loading") {
        return "Loading..."
    }

    if (status === "error") {
        return <span>Error: {error.message}</span>
    }

    return (
        <main className="imageDetails">
            <Link className="link" to="/">&larr; Back</Link>
            <section className="image">
                <ImageBox url={data.urls.raw + 'q=75&fm=jpg&h=600&fit=max'} />
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