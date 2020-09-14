import React from 'react'
import { useParams } from 'react-router-dom'

import "./ImageDetails.scss"

import { useImage } from '../../utility/query'


import Loader from '../../components/Loader/Loader'
import Details from '../../components/Details/Details'

const dpr = window.devicePixelRatio;

export default function ImageDetails() {
    let { id } = useParams();
    const { status, data, error } = useImage(id);

    if (status === "loading") {
        return <Loader />
    }

    if (status === "error") {
        return <div className="error">Error: {error.message}</div>
    }

    let heightT = 600
    let widthT = 600
    let innerWidth = window.innerWidth
    innerWidth = innerWidth - (innerWidth * 10 / 100)

    const { urls, color, width, height } = data

    widthT = width / height * heightT;

    if (widthT >= innerWidth) {
        widthT = innerWidth
        heightT = height / width * widthT;
    }

    return (
        <div className="image-details">
            <div className="image" style={{ background: color, height: heightT, width: widthT }}>
                <img alt="" src={`${urls.raw}q=75&auto=format&h=${heightT}&dpr=${dpr}&fit=max`} />
            </div>
            <Details data={data} />
        </div>
    )
}