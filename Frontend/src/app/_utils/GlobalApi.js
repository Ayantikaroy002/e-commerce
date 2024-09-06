
const { default: axios } = require("axios");

const apiKey='7b6a157167922c02a1d1433040e1f5a94f447d068324b6421f8f3dc0a53c4dcfe3f5dc3c6cd14d96eb8e8d7b32ccf1a8c7489b8c4f9b008eb8014ad2ffb7835036d53651a8f3a3c8bd8b7212feada3eb1e2e2f80db3e2d67fcd52b659129e8e97ef6c9ccea43b3ff6af8dd70a482de427b7b8c6657d719cd05bed9ca4d9f4a86'
const apiUrl='http://localhost:1337/api';

const axiosClient = axios.create({
    baseURL: apiUrl,
    headers: {
        'Authorization': `Bearer ${apiKey}`
    }  // Add your headers here if needed, like 'Authorization': 'Bearer YOUR_TOKEN'
})

const getMensProducts =()=> axiosClient.get('/mens-products?populate=*');

const getMensByCategory =(category) => axiosClient.get(`/mens-products?filters[$and][0][Category][$eq]=${category}&populate=*`).then(resp=>{
    return resp.data.data;
})

const getWomensProducts = () => axiosClient.get('/womens-products?populate=*');

const getWomensByCategory = (category) => axiosClient.get(`/womens-products?filters[$and][0][Category][$eq]=${category}&populate=*`).then(resp => {
    return resp.data.data;
});

const getKidsProducts = () => axiosClient.get('/kids-products?populate=*');

const getKidsByCategory = (category) => axiosClient.get(`/kids-products?filters[$and][0][Category][$eq]=${category}&populate=*`).then(resp => {
    return resp.data.data;
});

export default {
    getMensProducts,
    getMensByCategory,
    getWomensProducts,
    getWomensByCategory,
    getKidsProducts,
    getKidsByCategory
};
