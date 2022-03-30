import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListner, createUserDocumentFromAuth } from "../utils/firebase.utils";

// actual value to accress
export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null,
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    
    useEffect(() => {
    const unsuscribe = onAuthStateChangedListner((user) => {
       if (user) {
        createUserDocumentFromAuth(user);
       }
        setCurrentUser(user);
        
    })

        return unsuscribe
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}