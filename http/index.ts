import axios from 'axios';

const api = axios.create({
    //baseURL: process.env.API_BASE_URL,
    baseURL: 'http://localhost:1337',
    headers: {
        // Authorization: `Bearer ${process.env.BACKEND_API_KEY}`,
        Authorization: `Bearer 78f1b05f66ad4442b026f4ffafb1517f998d74781c887e86dbaa5f30fb0a604c6ae681912ea9d38d30c64772486ec394b5f9b38491fa784cf1735a901304c13e68a086db54aadd9d8dfe7b8e2807af562b020713b6b555ac5ef4492d97134954a193524971a3cdff00e63fb5f3dd35e8db8331d5a5de6a47dc6a974ed9ec06f9`
    },
});



// Articles
export const fetchArticles = async () =>
    api.get(`/api/insights?populate=*`);
