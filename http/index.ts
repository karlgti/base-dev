import axios from 'axios';

const api = axios.create({

    baseURL: 'https://base-strapi.onrender.com',
});



//Insight Articles
export const fetchArticles = async () =>
    api.get(`/api/insights?populate=*`);
