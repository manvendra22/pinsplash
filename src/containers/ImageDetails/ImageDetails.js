import React from 'react'
import { Link, useParams } from 'react-router-dom'

import "./ImageDetails.scss"

import { useImage } from '../../utility/query'


export default function ImageDetails() {
    let { id } = useParams();
    const { status, data, error } = useImage(id);

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
                <div className="info">
                    <div>
                        <div className="header">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx="12" cy="12" r="2" />
                                <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />
                                <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" />
                            </svg>
                        Views
                        </div>
                        <div className="value">{data.views}</div>
                    </div>
                    <div>
                        <div className="header">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M7 11v 8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" />
                            </svg>
                        Likes
                        </div>
                        <div className="value">{data.likes}</div>
                    </div>
                    <div>
                        <div className="header">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                                <polyline points="7 11 12 16 17 11" />
                                <line x1="12" y1="4" x2="12" y2="16" />
                            </svg>
                        Downloads
                        </div>
                        <div className="value">{data.downloads}</div>
                    </div>
                    {/* <div>{data.description}</div> */}
                </div>
                <div className="btns">
                    <button className="btn btn-secondary">Download</button>
                    <button className="btn btn-tertiary">Share</button>
                </div>
            </section>
        </main>
    )
}