import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
 export const UserContext = createContext();
import { toast } from 'react-toastify';

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const [token, setToken] = useState(localStorage.getItem('token'))

    const getUserById = async (id) => {
        try {
            const response = await axios.get(`https://booking-lessons-production.up.railway.app/api/users/oneUser/${id}`, 
                {id}, 
            );
            if (response.data.success) {
                setUser(response.data.data);
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    };

   

    return (
        <UserContext.Provider value={{ user, setUser, getUserById }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;