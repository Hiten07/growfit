import { useContext, createContext, useState } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {

    const [token,setToken] = useState(localStorage.getItem("token"));

    const isLoggedIn = !!token;
    console.log('isLoggedIn',isLoggedIn);
    console.log(token);

    const storetokenInLS = (serverToken) => {
        return localStorage.setItem("token",serverToken);
    };

    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    };

    return (
        <AuthContext.Provider value={ { isLoggedIn,LogoutUser,storetokenInLS }}>
                {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if(!authContextValue) {
        throw new Error("useAuth used outside the provider");
    }
    return authContextValue;
}
