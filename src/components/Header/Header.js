import React, { useState } from 'react'

import './Header.scss'

export default function ({ searchImage }) {
    const [value, setValue] = useState('')

    function handleClick() {
        searchImage(value)
    }

    return (
        <header>
            <div className="searchbar">
                <input type="text" placeholder="Search here" value={value} onChange={e => setValue(e.target.value)} />
                <button className="btn btn-primary" onClick={handleClick}>Search</button>
            </div>
        </header>
    )
}