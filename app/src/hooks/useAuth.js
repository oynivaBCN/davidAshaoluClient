import React, {createContext, useState, useContext} from 'react';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js'; 
import UserPool from '../config/UserPool';

const AuthContext = createContext()

export const AuthProvider = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const authenticate = async (Username, Password) => {
        return await new Promise((resolve, reject)=>{
            const user = new CognitoUser({
                Username,
                Pool: UserPool
            })
    
            const authDetails = new AuthenticationDetails({
                Username,
                Password
            })
    
            user.authenticateUser(authDetails, {
                onSuccess: (data) => {
                    setIsAuthenticated(true)
                    console.log("onSuccess: ", data)
                    resolve(data)
                },
                onFailure: (err) => {
                    console.error("onFailure: ", err)
                    reject(err)
                },
                newPasswordRequired: (data) => {
                    console.log("newPasswordRequired: ", data)
                    resolve(data)
                }
            })

        })
    }  

    const getSession = async ()=> {
        return await new Promise((resolve, reject)=> {
            const user = UserPool.getCurrentUser()
            if (user) {
                user.getSession((err, session) => {
                    if (err) {
                        reject()
                    } else  {
                        resolve(session)
                    }
                })
            } else {
                reject()
            }
        })
    }

    const logout = ()=> {
        const user = UserPool.getCurrentUser();
        if (user) {
            user.signOut();
            setIsAuthenticated(false)
        }
    }

    return(
       <AuthContext.Provider value={{isAuthenticated, authenticate, getSession, logout}}>
           {props.children}
       </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
  };