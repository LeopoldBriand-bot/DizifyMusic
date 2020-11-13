import React, {createContext, useContext, useReducer} from 'react';

const initialState = {
    userId: null,
    userName: null,
    playlists: [],
    authToken:''

};

const connect = function(state, action) {
    return {
        ...state,
        userId: action.userId,
        username: action.userName,
        playlists: action.playlists,
        authToken: action.authToken
    }
}

const disconnect = function(state, action) {
    return {
        ...state,
        ...initialState
    }
}

const reducer = (state, action) => {
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

export const UserProvider = ({children}) => (
   <UserContext.Provider value={useReducer(reducer, initialState)}>
       {children}
   </UserContext.Provider>
);