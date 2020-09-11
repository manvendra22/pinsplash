import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

import './Header.scss'

import Search from '../../assets/Search'

export default function Header() {
    const [value, setValue] = useState('')
    let history = useHistory();

    function handleClick() {
        history.push('/search?search="wanderlust')
    }

    return (
        <header>
            <div className="searchbar">
                <div className="searchContainer">
                    <Search className="icon" color="#2c3e50" />
                    <input type="text" placeholder="Search here" value={value} onChange={e => setValue(e.target.value)} />
                </div>
                <button className="btn btn-primary" onClick={handleClick}>Search</button>
            </div>
        </header>
    )
}