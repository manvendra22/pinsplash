import React from 'react'
import { Link, useParams } from 'react-router-dom'
// import ContentLoader from "react-content-loader"

import "./ImageDetails.scss"

import ImageBox from '../../components/ImageBox/ImageBox'

import { useImage } from '../../utility'


export default function ImageDetails() {
    let { id } = useParams();
    const { status, data, error, isFetching } = useImage(id);

    if (status === "loading") {
        return (
            'Loading...'
            // <div className="text-center">
            //     <ContentLoader
            //         width={'400'}
            //         height={'800'}
            //     >
            //         <rect x="0" y="0" width="100" height="50" />
            //         <rect x="0" y="70" rx="20" ry="20" width="400" height="600" />
            //     </ContentLoader>
            // </div>
        )
    }

    if (status === "error") {
        return <span>Error: {error.message}</span>
    }

    return (
        <main className="image-details">
            <Link className="link" to="/">&larr; Back</Link>
            <section className="image">
                <ImageBox url={data.urls.raw + 'q=75&fm=jpg&h=600&fit=max'} />
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