import React, {useState} from 'react';
import { useAuth } from "../../hooks/useAuth"
import { useNavigate } from "react-router-dom"
import { RoutesLinks } from '../../routes/routes-links';

const LoginForm = ()=>{
    let navigate = useNavigate();
    const [state , setState] = useState({
        username: "",
        password : ""
    })

    const { authenticate } = useAuth()

    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();
        authenticate(state.username, state.password).then(data => {
            navigate(RoutesLinks.DASHBOARD)
            console.log("Logged in!", data)
        }).catch(err => {
            console.error("Failed to log in!", err)
        })
    }

  return(
    <>
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form onSubmit={handleSubmitClick}>
                <div className="form-group text-left">
                    <label htmlFor="exampleUserName">Username</label>
                    <input type="text" 
                        className="form-control" 
                        id="username" 
                        aria-describedby="usernamehelp" 
                        placeholder="Enter Username"
                        onChange={handleChange}

                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                        onChange={handleChange}
                    />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                >
                    Sign In
                </button>
            </form>
        </div>
        </>
    )
}

export default LoginForm