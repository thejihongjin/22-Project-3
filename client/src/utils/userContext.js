import React, { createContext, useReducer, useContext } from "react";


const userContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "registerNewUser":
           return {user: action.user}
            
        case "signInUser":
            return { user: state.user };
        default:
            throw new Error(`Invalid action type: ${action.type}`);
    }
};

const UserProvider = ({ value = {}, ...props })=>{
    const [state, dispatch] = useReducer(reducer, { user: value });

    return <userContext.Provider value={[state, dispatch]} {...props} />;
};

const useUserContext = () => {
    return useContext(userContext);
};

export { UserProvider, useUserContext };

