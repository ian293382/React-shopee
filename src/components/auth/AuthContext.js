import React from 'react';
import { useState } from 'react';

const defaultContextValue = {
    isAuthenticated: true,
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
                setIsAuthenticated,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
