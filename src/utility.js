import { useQuery } from "react-query";
import axios from "axios";

export function useImages() {
    return useQuery("images", async () => {
        const { data } = await axios.get(
            `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_ACCESS_KEY}`
        );
        return data;
    });
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