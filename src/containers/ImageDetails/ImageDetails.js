import React from 'react'
import { Link, useParams } from 'react-router-dom'

import "./ImageDetails.scss"

import { useImage } from '../../utility/query'


export default function ImageDetails() {
    let { id } = useParams();
    const { status, data, error, isFetching } = useImage(id);

    if (status === "loading") {
        return (
            'Loading...'
        )
    }

    if (status === "error") {
        return <span>Error: {error.message}</span>
    }

    return (
        <main className="image-details">
            <Link className="link" to="/">&larr; Back</Link>
            <section className="image">
                <img alt="" src={data.urls.raw + 'q=75&fm=jpg&h=600&fit=max'} />
            </section>
            <section className="details">
                <div>
                    <div>{data.description}</div>
                    <div>Views: {data.views}</div>
                    <div>Likes: {data.likes}</div>
                </div>
                <div className="btns">
                    <button className="btn btn-secondary">Download</button>
                    <button className="btn btn-tertiary">Share</button>
                </div>
            </section>
        </main>
    )
}