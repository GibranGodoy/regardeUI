import React from "react";
import { authContext } from "./AuthContext";

function ProvideAuth({ children }) {
//   const authContext = React.createContext();
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

const fakeAuth = {
    isAuthenticated: false,
    login(cb) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

function useProvideAuth() {
    const [user, setUser] = React.useState(null);

    const login = cb => {
        return fakeAuth.login(() => {
            setUser('user');
            cb();
        })
    };

    const signout = cb => {
        return fakeAuth.signout(() => {
            setUser(null);
            cb();
        })
    };

    return {
        user,
        login,
        signout
    };
}

export default ProvideAuth;
