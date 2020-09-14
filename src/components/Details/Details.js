import React, { useRef } from 'react'
import cogoToast from 'cogo-toast';

import './Details.scss'

import { triggerDownload } from '../../utility/query'

import Like from '../../assets/Like'
import View from '../../assets/View'
import Share from '../../assets/Share'
import Download from '../../assets/Download'
import Location from '../../assets/Location'

export default function Details({ data: { urls, links, views, likes, downloads, location, description } }) {
    const downloadButton = useRef()

    function onDownloadProgress(progressEvent) {
        const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
        if (downloadButton.current) {
            downloadButton.current.firstChild.style.width = `${progress}%`
        }
    }

    function downloadComplete() {
        if (downloadButton.current) {
            downloadButton.current.disabled = false;
            downloadButton.current.style.background = null;
            downloadButton.current.firstChild.style.width = '0%'
        }
    }

    function downloadImage() {
        downloadButton.current.disabled = true;
        downloadButton.current.style.background = '#6b77e1';
        triggerDownload(urls.full, links.download_location, onDownloadProgress, downloadComplete)
    }

    return (
        <div className="details">
            <div className="stats">
                <div className="stat">
                    <div className="icon-container">
                        <View className="icon" color="#2c3e50" />
                                Views
                            </div>
                    <div className="value">{views}</div>
                </div>
                <div className="stat">
                    <div className="icon-container">
                        <Like className="icon" color="#2c3e50" />
                                Likes
                            </div>
                    <div className="value">{likes}</div>
                </div>
                <div className="stat">
                    <div className="icon-container">
                        <Download className="icon" color="#2c3e50" />
                                Downloads
                            </div>
                    <div className="value">{downloads}</div>
                </div>
            </div>
            <div className="description">
                {
                    (location.title || location.city) &&
                    <div className="icon-container">
                        <Location className="icon" color="#2c3e50" />
                        <span className="address">{location.title || location.city}</span>
                    </div>
                }
                {
                    description && <div>{description}</div>
                }
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
    )
}

function shareImage() {
    if (navigator.share) {
        navigator.share({
            title: 'Image',
            text: 'Check out this image',
            url: window.location.href
        })
            .then(() => console.log("Shared!"))
            .catch((error) => console.error(error))
    } else {
        navigator.clipboard.writeText(window.location.href)
        cogoToast.success("Copied!", { position: 'top-right' });
    }
}