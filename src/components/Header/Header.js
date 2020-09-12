import React, { useState, useEffect, useRef } from 'react'
import { useHistory, useLocation } from "react-router-dom";

import './Header.scss'

import Search from '../../assets/Search'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function Header() {
    const [value, setValue] = useState('')
    let history = useHistory();
    let location = useLocation();
    let query = useRef(useQuery());

    useEffect(function () {
        let search = query.current.get("search")
        if (search) {
            setValue(search)
        }
    }, [])

    function handleClick() {
        if (value) {
            history.push(`/search?search=${value}`)
        }
    }

    function goBack() {
        history.goBack()
    }

    if (location.pathname.includes('/images')) {
        return <header><span className="link" onClick={goBack}>&larr; Back</span></header>
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