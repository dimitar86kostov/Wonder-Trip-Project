import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export function AuthContextProvider(props) {
    const [authState, setAuthState] = useState({});

    const changeAuthState = (state) => {
        localStorage.setItem('accessToken', state.accessToken);
        setAuthState(state)
    };

    const logout = () => {
        setAuthState(null);
    }

    const contextData = {
        userId: authState?._id,
        username: authState?.username,
        email: authState?.email,
        accessToken: authState?.accessToken,
        isAuthenticated: !!authState?.email,
        changeAuthState,
        logout
    }

    return (
        <AuthContext.Provider value={contextData}>
            {props.children}
        </AuthContext.Provider>
    );
}

export function useAuthContext() {

    const authData = useContext(AuthContext);

    return authData;
}
