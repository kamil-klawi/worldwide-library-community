import { AxiosInstance } from 'axios';
import { createContext, PropsWithChildren } from 'react';
import { AxiosContextType } from '../../types/Axios';

export const AxiosContext = createContext<AxiosContextType | undefined>(
    undefined
);

export const AxiosProvider = ({
    axiosInstance,
    children,
}: PropsWithChildren<{ axiosInstance: AxiosInstance }>) => {
    return (
        <AxiosContext.Provider value={{ axiosInstance }}>
            {children}
        </AxiosContext.Provider>
    );
};
