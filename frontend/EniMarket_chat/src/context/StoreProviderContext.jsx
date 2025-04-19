import React,{createContext} from "react";



export const storeContext = createContext();


const StoreProvider = (props)=> {



   const  ContextValue ={
    //function
        
    };

    return (
        <storeContext.Provider value={ContextValue}>
            {props.children}
        </storeContext.Provider>
    )
}


export default StoreProvider;	
