import React from 'react';
import { createContext } from "react";
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {api, createSession} from "../../service/api"

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // eslint-disable-next-line
        const recoveredUser = localStorage.getItem('user');

        setLoading(false)

    }, 
    []);


    const login = async (email, password) => {
        console.log("login auth", {email, password});

        const response = await createSession(email, password)
        console.log("login", response.data)

        const loggedUser = response.data.user;
        const token = response.data.token;

        localStorage.setItem("user", JSON.stringify(loggedUser))
        localStorage.setItem("user", token);

        api.defaults.headers.Authorization = `Bearer ${token}`

        setUser(loggedUser);
        navigate("/Pagamento")

    }

    const logout = () => {
        console.log("logout");
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        api.defaults.headers.Authorization = null;
        setUser(null);
        navigate("/login");
    }

    return (
        <AuthContext.Provider
        value={{ authenticated: !!user, user, loading, login, logout}}
        >
        {children}
        </AuthContext.Provider>
    );
}