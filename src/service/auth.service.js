import axios from 'axios';

const authService = {
    register: async (userData) => {

        const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/register`, userData)
        return response.data;
    },

    login: async ({ email, password }) => {

        const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`, { email, password })
        return response.data
    }
}

export default authService;