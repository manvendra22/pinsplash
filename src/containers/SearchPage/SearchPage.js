import React from 'react'
import { useLocation } from 'react-router-dom'

import ImageView from '../ImagesView/ImageView'

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
        isFetchingMore
        // canFetchMore
    } = useSearchImages(query.get("search"));

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
        <main>
            <ImageView fetchMoreData={fetchMoreData} data={data} />
        </main >
    )
}

