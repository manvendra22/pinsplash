import React, { useState, useEffect, useRef } from 'react'
import { useHistory, useLocation, Link } from "react-router-dom";

import './Header.scss'

import Search from '../../assets/Search'
import logo from '../../assets/logo.svg'
import logotitle from '../../assets/logo-title.svg'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}


export default function Header() {
    const [value, setValue] = useState('')
    const history = useHistory();
    const location = useLocation();
    const search = useRef(useQuery().get("search"))

    useEffect(function () {
        if (search.current) {
            setValue(search.current)
        }

        // TODO: Check why this logic didn't work ?
        // window.addEventListener('keypress', handleKeyPress)

        // return function () {
        //     window.removeEventListener('keypress', handleKeyPress)
        // }
    }, [])

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            handleClick()
        }
    }

    function handleClick() {
        if (value) {
            history.push(`/search?search=${value}`)
        }
    }

    let logoSrc = logotitle

    if (window.innerWidth <= 1160) {
        logoSrc = logo
    }

    return (
        <header>
            <Link to="/" onClick={() => setValue('')}>
                <div className="logo-title">
                    <img alt="" src={logoSrc} className="logo" />
                </div>
            </Link>
            {
                location.pathname.includes('/images') ?
                    <span className="link" onClick={history.goBack}>&larr; Back</span> :
                    <div className="searchbar">
                        <div className="search-container">
                            <Search className="icon" color="#2c3e50" />
                            <input type="text" placeholder="Search images" value={value} onChange={e => setValue(e.target.value)} onKeyPress={handleKeyPress} />
                        </div>
                        <button className="btn btn-primary" onClick={handleClick}>Search</button>
                    </div>
            }
        </header>
    )
}