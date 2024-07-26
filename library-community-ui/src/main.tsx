import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import axios from 'axios';
import App from './App.tsx';
import { AxiosProvider } from './contexts/AxiosProvider/index.tsx';
import './assets/styles/index.scss';

const queryClient = new QueryClient();

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token' || undefined);

    if (token != undefined) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AxiosProvider axiosInstance={axiosInstance}>
            <QueryClientProvider client={queryClient}>
                <App />
            </QueryClientProvider>
        </AxiosProvider>
    </React.StrictMode>
);
