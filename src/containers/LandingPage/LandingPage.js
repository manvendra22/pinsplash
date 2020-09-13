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
        isFetchingMore,
        // canFetchMore TODO: Use this to handle end of data case
    } = useImages();

    if (status === "loading") {
        return <Loader />
    }

    if (status === "error") {
        return <div className="error">Error: {error.message}</div>
    }

    function fetchMoreData() {
        // console.log({ canFetchMore })
        if (!isFetching && !isFetchingMore) {
            fetchMore()
        }
    }

    return (
        <ImageGrid fetchMoreData={fetchMoreData} data={data} />
    )
}

