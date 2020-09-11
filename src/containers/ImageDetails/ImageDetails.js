import React from 'react'
import { useParams } from 'react-router-dom'
import cogoToast from 'cogo-toast';

import "./ImageDetails.scss"

import { useImage, triggerDownload } from '../../utility/query'

import Like from '../../assets/Like'
import View from '../../assets/View'
import Share from '../../assets/Share'
import Download from '../../assets/Download'
import Location from '../../assets/Location'

export default function ImageDetails() {
    let { id } = useParams();
    const { status, data, error } = useImage(id);

    if (status === "loading") {
        return 'Loading...'
    }

    if (status === "error") {
        return <span>Error: {error.message}</span>
    }

    function downloadImage() {
        triggerDownload(data.urls.full, data.links.download_location)
    }

    function shareImage() {
        if (navigator.share) {
            navigator.share({
                title: 'Image',
                text: 'Check out this image',
                url: window.location.href
            })
                .then(() => cogoToast.success("Shared!", { position: 'top-right' }))
                .catch((error) => cogoToast.error(error, { position: 'top-right' }));
        } else {
            navigator.clipboard.writeText(window.location.href)
            cogoToast.success("Copied!", { position: 'top-right' });
        }
    }

    return (
        <div className="image-details">
            <div className="image">
                <img alt="" src={data.urls.raw + 'q=75&fm=jpg&h=600&fit=max'} />
            </div>
            <div className="details">
                <div>
                    <div className="statistics">
                        <div className="statistic">
                            <div className="icon-container">
                                <View className="icon" color="#2c3e50" />
                                Views
                            </div>
                            <div className="value">{data.views}</div>
                        </div>
                        <div className="statistic">
                            <div className="icon-container">
                                <Like className="icon" color="#2c3e50" />
                                Likes
                            </div>
                            <div className="value">{data.likes}</div>
                        </div>
                        <div className="statistic">
                            <div className="icon-container">
                                <Download className="icon" color="#2c3e50" />
                                Downloads
                            </div>
                            <div className="value">{data.downloads}</div>
                        </div>
                    </div>
                    <div className="description">
                        {data.location.title &&
                            <div className="location icon-container">
                                <Location className="icon" color="#2c3e50" />
                                {data.location.title}
                            </div>
                        }
                        <div>{data.description}</div>
                    </div>
                </div>
                <div className="btns">
                    <button className="btn btn-secondary icon-container" onClick={downloadImage}>
                        <Download className="icon" color="#fff" />
                        Download
                    </button>
                    <button className="btn btn-tertiary icon-container" onClick={shareImage}>
                        <Share className="icon" color="#fff" />
                        Share
                    </button>
                </div>
            </div>
        </div>
    )
}