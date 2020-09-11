import React from 'react'
import { useParams } from 'react-router-dom'

import ImageView from '../ImagesView/ImageView'

import { useSearchImages } from '../../utility/query'


export default function SearchPage() {
    let { search } = useParams();

    const {
        status,
        data,
        error,
        fetchMore,
        // isFetching,
        isFetchingMore
        // canFetchMore
    } = useSearchImages(search);

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

