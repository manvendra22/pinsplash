import React from 'react'

import './ImageBox.scss'

export default function ({ url }) {
    return (
        <div className="card">
            <img alt="" src={url} className="image" />
        </div>
    )
}