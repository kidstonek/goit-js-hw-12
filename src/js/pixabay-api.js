import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: '56291655-46a36a1bb1a9da85580c7f68a'
};

export const PER_PAGE = 15;

export async function getImagesByQuery(query, page) {
    const result = await axios.get('', {
        params: {
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            page: page,
            per_page: PER_PAGE,
        }
    })
    return result.data
}
