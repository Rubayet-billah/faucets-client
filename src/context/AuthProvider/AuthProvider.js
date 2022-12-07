import React, { createContext, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [selectedNav, setSelectedNav] = useState('Ethereum Kovan')

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logoutUser = () => {
        return signOut(auth)
    }

    const vaules = {
        selectedNav,
        setSelectedNav,
        createUser,
        loginUser,
    }
    return (
        <AuthContext.Provider value={vaules}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;