import React from 'react'

import './ImageBox.scss'

export default function ImageBox({ url }) {
    return (
        <div className="card">
            <img alt="" src={url} />
        </div>
    )
}