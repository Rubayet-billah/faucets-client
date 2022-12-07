import React, { createContext, useState } from 'react';

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [selectedNav, setSelectedNav] = useState('Ethereum Kovan')


    const vaules = {
        selectedNav,
        setSelectedNav,
    }
    return (
        <AuthContext.Provider value={vaules}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;