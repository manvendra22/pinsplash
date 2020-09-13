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
        // isFetching,
        isFetchingMore,
        canFetchMore
    } = useImages();

    if (status === "loading") {
        return <Loader />
    }

    if (status === "error") {
        return <div className="error">Error: {error.message}</div>
    }

    let showData = data.flatMap(page => {
        return page.result
    })

    function fetchMoreData() {
        if (!isFetchingMore && canFetchMore) {
            fetchMore()
        }
    }

    return (
        <ImageGrid data={showData} fetchMoreData={fetchMoreData} canFetchMore={canFetchMore} />
    )
}

