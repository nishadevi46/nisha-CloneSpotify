import { createContext,useReducer,useContext } from "react";

export const Statecontext=createContext();
export const StateProvider=({children,intialState,reducer})=>(
    <Statecontext.Provider value={useReducer(reducer,intialState)}>
                  {children}
    </Statecontext.Provider>
)

export const useStateProvider=()=>useContext(Statecontext);