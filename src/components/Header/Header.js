import React, { useState, useEffect, useRef } from 'react'
import { useHistory, useLocation, Link } from "react-router-dom";

import './Header.scss'

import Search from '../../assets/Search'
import abstract from '../../assets/abstract.svg'
import title from '../../assets/title3.svg'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function Header() {
    const [value, setValue] = useState('')
    let history = useHistory();
    let location = useLocation();
    let search = useRef(useQuery().get("search"))

    useEffect(function () {
        if (search.current) {
            setValue(search.current)
        }
    }, [])

    function handleClick() {
        if (value) {
            history.push(`/search?search=${value}`)
        }
    }

    return (
        <header>
            <Link to="/" onClick={() => setValue('')}>
                <div className="logo-title">
                    <img alt="" src={abstract} className="logo" />
                    <img alt="" src={title} className="title" />
                </div>
            </Link>
            {
                location.pathname.includes('/images') ?
                    <span className="link" onClick={history.goBack}>&larr; Back</span> :
                    <div className="searchbar">
                        <div className="search-container">
                            <Search className="icon" color="#2c3e50" />
                            <input type="text" placeholder="Search here" value={value} onChange={e => setValue(e.target.value)} />
                        </div>
                        <button className="btn btn-primary" onClick={handleClick}>Search</button>
                    </div>
            }
        </header>
    )
}