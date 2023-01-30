// import axios from "axios";

// const API_KEY = '32001489-c852e0172321e8148fc1ebe9a';

// export const fetchArticlesWithQuery = async searchQuery => {
//     const response = axios.get(`/search?query=${searchQuery}`);
//     return response.data.hits;
// };

// eslint-disable-next-line import/no-anonymous-default-export
// export default {
//     fetchArticlesWithQuery,
// };
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://pixabay.com/api',

    params: {
        per_page: 12,
        key: '32001489-c852e0172321e8148fc1ebe9a',
        image_type: 'photo',
        orientation: 'orientation',
    },
});

export const searchImages = async (q, page = 1) => {
    const { data } = await instance.get('/?&', {
        params: {
            q,
            page,
        },
    });
    return data.hits;
};
