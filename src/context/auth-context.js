import React from 'react'
const authContext = React.createContext({
    //the authenticated initial value here is actually useless
    //but it help with the format
    authenticated: false,
    login: () => {}
});
export default authContext;