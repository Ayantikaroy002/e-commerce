
const { default: axios } = require("axios");

const apiKey='c38d2c1899b0965ee2c7c25db278ad5d1cc2af36939e54bda103664d33786ecf888967ceb4c99671915d79af9f276bd65d597151cacbd0d223dc217ff469d1e91356cc5b88396e707eb06f643e705f80c21f1bf9ffca2050e46fa0a8f23fc2ff7b5d62acd444d9a32e0da95027fff9b96218690f0a89d4bab126a1aeb32723e2'
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

const getWomensProducts = () => axiosClient.get('/womens-products?populate=*').then(resp => {
    return resp.data.data;
});;

const getWomensByCategory = (category) => axiosClient.get(`/womens-products?filters[$and][0][Category][$eq]=${category}&populate=*`).then(resp => {
    return resp.data.data;
});

const getKidsProducts = () => axiosClient.get('/kids-products?populate=*');

const getKidsByCategory = (category) => axiosClient.get(`/kids-products?filters[$and][0][Category][$eq]=${category}&populate=*`).then(resp => {
    return resp.data.data;
});

const getWomensById =(id) => axiosClient.get(`/womens-products/${id}?populate=*`).then(resp=>{
    return resp.data.data;
});

const getMensById =(id) => axiosClient.get(`/mens-products/${id}?populate=*`).then(resp=>{
    return resp.data.data;
});

const getKidsById =(id) => axiosClient.get(`/kids-products/${id}?populate=*`).then(resp=>{
    return resp.data.data;
});

const addToCart =(data,jwt) => axiosClient.post('/carts',data, {
    headers:{
        Authorization: `Bearer  ${jwt}`,
        'Content-Type': 'application/json' 
    }
})

const getCartItems =(userId,jwt) => axiosClient.get(`/carts?filters[userId][$eq]=${userId}&populate[0]=mens_products&populate[1]=mens_products.Product_image&populate[2]=womens_products&populate[3]=womens_products.Product_image&populate[4]=kids_products&populate[5]=kids_products.Product_image`,{
    headers:{
        Authorization: `Bearer  ${jwt}`,
        'Content-Type': 'application/json' 
    }
}).then(resp=>{
    return resp.data.data;
});

const updateCartItem = (cartItemId, data, jwt) => axiosClient.put(`/carts/${cartItemId}`, data, {
    headers: {
        Authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json'
    }
});


const registerUser =(username,email,password) => axiosClient.post('/auth/local/register', {
    username: username,
    email: email,
    password: password
})

const signIn =(email,password) => axiosClient.post('/auth/local', {
    identifier: email,
    password: password
})

export default {
    getMensProducts,
    getMensByCategory,
    getWomensProducts,
    getWomensByCategory,
    getKidsProducts,
    getKidsByCategory,
    getWomensById,
    getMensById,
    getKidsById,
    addToCart,
    getCartItems,
    updateCartItem,
    registerUser,
    signIn
};


//http://localhost:1337/api/carts?filters[userId][$eq]=1&populate[1]=mens_products.Product_image