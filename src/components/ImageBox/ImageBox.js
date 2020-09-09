import React from 'react'

export default function ({ url }) {
    return (
        <div className="card">
            <img alt="" src={url} className="image" />
        </div>
    )
}