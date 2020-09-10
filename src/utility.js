import { useQuery, useInfiniteQuery } from "react-query";
import axios from "axios";

const getImages = async function (key, nextPage = 1) {
    const { data } = await axios.get(
        `https://api.unsplash.com/photos/?page=${nextPage}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
    );
    return data;
};

export function useImages() {
    return useInfiniteQuery("images", getImages);
}

const getImageById = async (key, id) => {
    const { data } = await axios.get(
        `https://api.unsplash.com/photos/${id}?client_id=${process.env.REACT_APP_ACCESS_KEY}`
    );
    return data;
};

export function useImage(id) {
    return useQuery(["post", id], getImageById, {
        enabled: id,
    });
}