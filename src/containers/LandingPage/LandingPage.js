import React from 'react'

import ImageGrid from '../../components/ImageGrid/ImageGrid'
import Loader from '../../components/Loader/Loader'

import { useImages } from '../../utility/query'


export default function LandingPage() {
    const {
        status,
        data,
        error,
        fetchMore,
        isFetching,
        isFetchingMore
        // canFetchMore
    } = useImages();

    if (status === "loading") {
        return <Loader />
    }

    if (status === "error") {
        return <div className="error">Error: {error.message}</div>
    }

    function fetchMoreData() {
        console.log("Fetching called", isFetching, isFetchingMore)
        if (!isFetchingMore) {
            console.log("Fetching...")
            fetchMore()
        }
    }

    return (
        <ImageGrid fetchMoreData={fetchMoreData} data={data} />
    )
}

