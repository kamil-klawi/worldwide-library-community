import { useContext } from 'react';
import { AxiosContext } from '../../contexts/AxiosProvider';
import { AxiosInstance } from 'axios';

export const useAxios = (): AxiosInstance => {
    const axiosInstance = useContext(AxiosContext);

    if (!axiosInstance) {
        throw new Error('useAxios must be used within an AxiosProvider');
    }

    return axiosInstance.axiosInstance;
};
