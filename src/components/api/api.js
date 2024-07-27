import axios from "axios";


//endpoint
const apiBaseUrl = 'http://192.168.1.4:8080';

const register = `${apiBaseUrl}/register`
const login = `${apiBaseUrl}/login`

const registerSeller =  `${apiBaseUrl}/registerSeller`
const updateSeller = `${apiBaseUrl}/updateSeller`



// export const image500 =(path) => path ?  `https://image.tmdb.org/t/p/w500/${path}` : null;


// export const moviesDetailsEndpoint =(id) => `${apiBaseUrl}/movie/${id}?api_key=${apiKey}` ;




// export const persionDetailsEndpoint = (id) => `${apiBaseUrl}/person/${id}?api_key=${apiKey}`;





//apiCall
export const postLogin = (payload) => {
    return postCall(login,payload);
}
export const postRegister = (payload) => {
    return postCall(register,payload);
}
export const postRegisterSeller = (payload) => {
    return postCall(registerSeller,payload);
}
export const postUpdateSeller = (payload) => {
    return postCall(updateSeller,payload);
}



const getCall = async (endpoint) => {
    const options = {
        method: 'GET',
        url: endpoint,
        headers: {
            // 'Authorization': `Bearer ${localStorage.getItem("token")}`,
        }
    }
    try {
        const response = await axios.request(options);
        return response?.data
    }
    catch (error) {
        console.log('error', error);
        return null
    }
}
const postCall = async (endpoint, payload) => {
    const options = {
        method: 'POST',
        url: endpoint,
        data: payload,
        headers: {
            // 'Authorization': `Bearer ${localStorage.getItem("token")}`,
            'Content-Type': 'application/json'
        }
    };
    try {
        const response = await axios.request(options);
        return response?.data;
    } catch (error) {
        return null;
    }
};







