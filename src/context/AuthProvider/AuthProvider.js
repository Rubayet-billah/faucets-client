import React, { createContext, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import app from '../../firebase/firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [selectedNav, setSelectedNav] = useState('Ethereum Kovan')

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const vaules = {
        selectedNav,
        setSelectedNav,
        createUser,
    }
    return (
        <AuthContext.Provider value={vaules}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;