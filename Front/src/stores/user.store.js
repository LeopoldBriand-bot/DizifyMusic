import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
    userId: null,
    username: null,
    roles: ["TESST"],
    authToken: ''

};

const connect = function (state, action) {
    console.log("CONNECT2", action);
    let tmp = {
        ...state,
        userId: action.userId,
        username: action.username,
        roles: action.roles,
        authToken: action.authToken
    };
    console.log("tmpt", tmp);
    return tmp;
}

const disconnect = function (state, action) {
    return {
        ...state,
        ...initialState
    }
}

const reducer = (state, action) => {
    console.log("REDUCER", state, action);
    switch (action.type) {
        case 'connect':
            return connect(state, action);
        case 'disconnect':
            return disconnect(state, action);
        case 'isConnected':
            return state.authToken;
        default:
            return state;
    }
};

const UserContext = createContext();

export const UserConsumer = UserContext.Consumer;
export const UserConsumerHook = () => useContext(UserContext);

export const UserProvider = ({ children }) => (
    <UserContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </UserContext.Provider>
);