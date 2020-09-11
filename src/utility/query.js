import { useQuery, useInfiniteQuery } from "react-query";
import axios from "axios";

const url = 'https://api.unsplash.com'
const clientId = process.env.REACT_APP_ACCESS_KEY

const getImages = async function (key, nextPage = 1) {
    const { data, headers } = await axios.get(
        `${url}/photos/?page=${nextPage}&client_id=${clientId}`
    );
    return { result: data, link: headers.link };
};

export function useImages() {
    return useInfiniteQuery("images", getImages, {
        getFetchMore: ({ link }) => {
            const links = link.split(',')
            const last = links[links.length - 1]
            const position = last.indexOf('page=')
            const page = last[position + 5]
            return Number(page)
        },
    });
}



const getSearchImages = async function (key, query, nextPage = 1) {
    const { data, headers } = await axios.get(
        `${url}/search/photos/?query=${query}&page=${nextPage}&client_id=${clientId}`
    );
    return { result: data.results, link: headers.link };
};

export function useSearchImages(query) {
    return useInfiniteQuery(['images', query], getSearchImages, {
        getFetchMore: ({ link }) => {
            const links = link.split(',')
            const last = links[links.length - 1]
            const position = last.indexOf('page=')
            const page = last[position + 5]
            return Number(page)
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