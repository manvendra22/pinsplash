import React from 'react'

import ImageView from '../ImagesView/ImageView'

import { useImages } from '../../utility/query'


export default function LandingPage() {
    const {
        status,
        data,
        error,
        fetchMore,
        // isFetching,
        isFetchingMore
        // canFetchMore
    } = useImages();

    if (status === "loading") {
        return "Loading..."
    }

    if (status === "error") {
        return <span>Error: {error.message}</span>
    }

    function fetchMoreData() {
        if (!isFetchingMore) {
            fetchMore()
        }
    }

    return (
        <ImageView fetchMoreData={fetchMoreData} data={data} />
    )
}

