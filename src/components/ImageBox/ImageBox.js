import React from 'react'
import { Link } from 'react-router-dom'

import './ImageBox.scss'

export default function ImageBox({ url, id }) {
    return (
        <Link to={`/images/${id}`} className="image-link">
            <img alt="" src={url} />
        </Link>
    )
}