import { useQuery, useInfiniteQuery } from "react-query";
import axios from "axios";

const getImages = async function (key, nextPage = 1) {
    const { data, headers } = await axios.get(
        `https://api.unsplash.com/photos/?page=${nextPage}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
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

const getImageById = async (key, id) => {
    const { data } = await axios.get(
        `https://api.unsplash.com/photos/${id}?client_id=${process.env.REACT_APP_ACCESS_KEY}`
    );
    return data;
};

export function useImage(id) {
    return useQuery(["images", id], getImageById, {
        enabled: id,
    });
}