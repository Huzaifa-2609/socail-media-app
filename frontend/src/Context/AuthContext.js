import { createContext, useReducer } from "react"
import AuthReducer from "./AuthReducer";

const INITIAL_STATE={
    user:{
        "_id": "6342bdd3ac8acde749043070"
        ,
        "username": "Aslam",
        "email": "huzaifaoct@gmail.com",
        "password": "$2a$10$31rTpOHonH8s0kPM0JO6CuoH1zQF1zev.LkEe3B7D1BVDx5p9SDOG",
        "profilePic": "",
        "coverPic": "",
        "followers": [],
        "followings": [],
        "isAdmin": false,
        "createdAt": {
          "$date": {
            "$numberLong": "1665318355930"
          }
        },
        "updatedAt": {
          "$date": {
            "$numberLong": "1665318355930"
          }
        },
        "__v": 0
      },
    isFetching:false,
    error:false,
}
export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider=({children})=>{
    const [state, dispatch]= useReducer(AuthReducer, INITIAL_STATE);

    return(
        <AuthContext.Provider value={{user:state.user, isFetching:state.isFetching, error:state.error, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
    
}