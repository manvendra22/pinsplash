import { useQuery, useInfiniteQuery } from "react-query";
import axios from "axios";

const regex = /(&.*?&)/g;
const url = 'https://api.unsplash.com'
const clientId = process.env.REACT_APP_ACCESS_KEY

const getImages = async function (key, nextPage = 1) {
    const { data, headers } = await axios.get(
        `${url}/photos/?per_page=30&page=${nextPage}&client_id=${clientId}`
    );
    return { result: data, link: headers.link };
};

export function useImages() {
    return useInfiniteQuery("images", getImages, {
        getFetchMore: ({ link }, other) => {
            const links = link.split(',')
            const last = links[links.length - 1]
            const found = last.match(regex);
            const pageNo = found[0].match(/(\d+)/)
            return Number(pageNo[0])
        },
    });
}

const getSearchImages = async function (key, query, nextPage = 1) {
    const { data, headers } = await axios.get(
        `${url}/search/photos/?per_page=30&query=${query}&page=${nextPage}&client_id=${clientId}`
    );
    return { result: data.results, link: headers.link };
};

export function useSearchImages(query) {
    return useInfiniteQuery(['images', query], getSearchImages, {
        getFetchMore: ({ link }) => {
            const links = link.split(',')
            const last = links[links.length - 1]
            const found = last.match(regex);
            const pageNo = found[0].match(/(\d+)/)
            return Number(pageNo[0])
        },
    });
}

const getImageById = async (key, id) => {
    const { data } = await axios.get(
        `${url}/photos/${id}?client_id=${clientId}`
    );
    return data;
};

export function useImage(id) {
    return useQuery(["images", id], getImageById, {
        enabled: id,
    });
}

export function triggerDownload(fullUrl, triggerUrl, onDownloadProgress, downloadComplete) {
    axios({
        url: fullUrl,
        method: 'GET',
        responseType: 'blob', // important
        onDownloadProgress
    }).then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'image.jpg');
        document.body.appendChild(link);
        link.click();
    }).finally(downloadComplete)

    axios.get(`${triggerUrl}?client_id=${clientId}`)
}