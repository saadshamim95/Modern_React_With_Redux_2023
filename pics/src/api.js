import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID tZ6qNL1iPBHrdHT_wS-E1WRfBz3fEa2yH3g5zubQfns'
        },
        params: {
            query: term
        }
    });

    return response.data.results;
};

export default searchImages;