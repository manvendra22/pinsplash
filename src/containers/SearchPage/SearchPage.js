import React from 'react'
import { useLocation } from 'react-router-dom'

import ImageGrid from '../../components/ImageGrid/ImageGrid'
import Loader from '../../components/Loader/Loader'

import { useSearchImages } from '../../utility/query'


function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function SearchPage() {
    let query = useQuery();

    const {
        status,
        data,
        error,
        fetchMore,
        // isFetching,
        isFetchingMore,
        canFetchMore
    } = useSearchImages(query.get("search"));

    if (status === "loading") {
        return <Loader />
    }

    if (status === "error") {
        return <div className="error">Error: {error.message}</div>
    }

    let showData = data.flatMap(page => {
        return page.result
    })

    if (!showData.length) {
        return <div className="error">Sorry, we couldn't find any Images for this search.</div>
    }

    function fetchMoreData() {
        if (!isFetchingMore && canFetchMore) {
            fetchMore()
        }
    }

    return (
        <ImageGrid data={showData} fetchMoreData={fetchMoreData} canFetchMore={canFetchMore} />
    )
}

