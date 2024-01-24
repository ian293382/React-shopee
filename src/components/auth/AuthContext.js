import React, { useEffect } from 'react';
import { useState } from 'react';

const defaultContextValue = {
    isAuthenticated: false,
};

const AuthContext = React.createContext(defaultContextValue);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(
        defaultContextValue.isAuthenticated
    );

    // 因為每次重新整理登入用戶都會被刷掉 => local storege保存資料 類似hook 要用Json 解析喔
    useEffect(() => {
        const authStateString = localStorage.getItem('shopee:auth.state');
        try {
            const authState = JSON.parse(authStateString);
            if (authState && authState.token) {
                setIsAuthenticated(true);
            }
        } catch (error) {
            // Handle JSON parsing error if needed
            console.error('Error parsing JSON:', error);
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                login: async(username, password) => {
                    if (username === 'test') {
                        const token = 'good_token';
                        localStorage.setItem(
                            'shopee:auth.state',
                         JSON.stringify({token})
                         );
                        setIsAuthenticated(true)
                        return {token}
                    }
                    setIsAuthenticated(false)
                    return {token: null, error: "invalid password" };
                },

                    // 常用實作登入方式 const res = await.fetch('/login')
                    // const res = await.axios('/login')
                    // 下面Logout 一定要把setItem 給清除掉喔
                logout: async () => {
                    setIsAuthenticated(false)
                    localStorage.removeItem('shopee:auth.state')
                }

               
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
