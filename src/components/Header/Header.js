import React, { useState } from 'react'

import './Header.scss'

export default function Header({ searchImage }) {
    const [value, setValue] = useState('')

    function handleClick() {
        searchImage(value)
    }

    return (
        <header>
            <div className="searchbar">
                <div className="searchContainer">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx="10" cy="10" r="7" />
                        <line x1="21" y1="21" x2="15" y2="15" />
                    </svg>
                    <input type="text" placeholder="Search here" value={value} onChange={e => setValue(e.target.value)} />
                </div>
                <button className="btn btn-primary" onClick={handleClick}>Search</button>
            </div>
        </header>
    )
}