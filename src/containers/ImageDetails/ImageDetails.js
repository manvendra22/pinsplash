import React, { useRef } from 'react'
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
    const downloadButton = useRef()

    if (status === "loading") {
        return 'Loading...'
    }

    if (status === "error") {
        return <span>Error: {error.message}</span>
    }

    function onDownloadProgress(progressEvent) {
        const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
        downloadButton.current.firstChild.style.width = `${progress}%`
    }

    function downloadComplete() {
        downloadButton.current.disabled = false;
        downloadButton.current.style.background = null;
        downloadButton.current.firstChild.style.width = '0%'
    }

    function downloadImage() {
        downloadButton.current.disabled = true;
        downloadButton.current.style.background = '#6b77e1';
        triggerDownload(data.urls.full, data.links.download_location, onDownloadProgress, downloadComplete)
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

    const { urls, views, likes, downloads, location, description, color, width, height } = data
    const widthT = width / height * 600;

    return (
        <div className="image-details">
            <div className="image" style={{ background: color, height: '600px', width: widthT }}>
                <img alt="" src={urls.raw + 'q=75&fm=jpg&h=600&fit=max'} />
            </div>
            <div className="details">
                <div>
                    <div className="statistics">
                        <div className="statistic">
                            <div className="icon-container">
                                <View className="icon" color="#2c3e50" />
                                Views
                            </div>
                            <div className="value">{views}</div>
                        </div>
                        <div className="statistic">
                            <div className="icon-container">
                                <Like className="icon" color="#2c3e50" />
                                Likes
                            </div>
                            <div className="value">{likes}</div>
                        </div>
                        <div className="statistic">
                            <div className="icon-container">
                                <Download className="icon" color="#2c3e50" />
                                Downloads
                            </div>
                            <div className="value">{downloads}</div>
                        </div>
                    </div>
                    <div className="description">
                        {location.title &&
                            <div className="location icon-container">
                                <Location className="icon" color="#2c3e50" />
                                {location.title}
                            </div>}
                        <div>{description}</div>
                    </div>
                </div>
                <div className="btns">
                    <button ref={downloadButton} className="btn btn-secondary icon-container" onClick={downloadImage}>
                        <span className="progress"></span>
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