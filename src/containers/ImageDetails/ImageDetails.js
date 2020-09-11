import React from 'react'
import { useParams } from 'react-router-dom'

import "./ImageDetails.scss"

import { useImage } from '../../utility/query'

import Like from '../../assets/Like'
import View from '../../assets/View'
import Share from '../../assets/Share'
import Download from '../../assets/Download'


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
        <div className="image-details">
            <div className="image">
                <img alt="" src={data.urls.raw + 'q=75&fm=jpg&h=600&fit=max'} />
            </div>
            <div className="details">
                <div className="info">
                    <div>
                        <div className="header">
                            <View className="icon" color="#2c3e50" />
                        Views
                        </div>
                        <div className="value">{data.views}</div>
                    </div>
                    <div>
                        <div className="header">
                            <Like className="icon" color="#2c3e50" />
                        Likes
                        </div>
                        <div className="value">{data.likes}</div>
                    </div>
                    <div>
                        <div className="header">
                            <Download className="icon" color="#2c3e50" />
                        Downloads
                        </div>
                        <div className="value">{data.downloads}</div>
                    </div>
                    {/* <div>{data.description}</div> */}
                </div>
                <div className="btns">
                    <button className="btn btn-secondary">
                        <Download className="icon" color="#fff" />
                        Download
                    </button>
                    <button className="btn btn-tertiary">
                        <Share className="icon" color="#fff" />
                        Share
                    </button>
                </div>
            </div>
        </div>
    )
}