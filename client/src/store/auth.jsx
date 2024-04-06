import { useContext, createContext, useState, useEffect } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {

    const [token,setToken] = useState(localStorage.getItem("token"));
    const [user,setUser] = useState("");

    const isLoggedIn = !!token;
    console.log('isLoggedIn',isLoggedIn);
    console.log(token);

    const storetokenInLS = (serverToken) => {
        return localStorage.setItem("token",serverToken);
    };

    // logout functionality
    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    };

    const userAuthentication = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/user', {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if(response.ok) {
                const data = await response.json();
                console.log(data);
                setUser(data.userData);
            }
        } catch (error) {
            console.log("error fetching data");
        }
    }

    // JWT Authentication => currently loggedIn user
    useEffect(() => {
            userAuthentication()
    },[])

    return (
        <AuthContext.Provider value={ { isLoggedIn,LogoutUser,storetokenInLS,user }}>
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
