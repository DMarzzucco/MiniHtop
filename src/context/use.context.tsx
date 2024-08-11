"use client";
import React, { useContext } from "react";
import {AuthProp, ReactChild} from "@/ts"

const AuthContext = React.createContext<AuthProp | undefined>(undefined)

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error(`${Error}`)
    }
    return context;
}

const AuthProvider: React.FC<ReactChild> = ({ children }) => {
    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;