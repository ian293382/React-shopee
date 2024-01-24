import React from 'react';
import { useState } from 'react';

const defaultContextValue = {
    isAuthenticated: false,
};

const AuthContext = React.createContext(defaultContextValue);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(
        defaultContextValue.isAuthenticated
    );

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                login: async(username, password) => {
                    if (username === 'test') {
                        setIsAuthenticated(true)
                        return {token: 'good_token'}
                    }
                    setIsAuthenticated(false)
                    return {token: null, error: "invalid password" };
                },

                    // 常用實作登入方式 const res = await.fetch('/login')
                    // const res = await.axios('/login')

               
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
