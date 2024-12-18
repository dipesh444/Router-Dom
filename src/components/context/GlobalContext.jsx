import {  createContext } from "react";



export const GlobalContext = createContext();


const GlobalContextProvider = ({children})=>{
    const greet= "Hello i am from context";
    const third= "Hello i am from third";
    return(
<GlobalContext.Provider value={{greet,third}}>
    {children}
</GlobalContext.Provider>
    )
}

export default GlobalContextProvider



