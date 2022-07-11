import React, {useState, useEffect} from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useStatus } from '../../hooks/useStatus';

const Status = () => {
	// const [status, setStatus] = useState(false);
    // const {getSession, logout} = useAuth()
    //
    // useEffect(()=>{
    //     getSession().then(session => {
    //         // console.log("Session: ", session);
    //         setStatus(true)
    //     }).catch((error)=>{
    //         console.log("Error", error)
    //     })
    // })

    const status = useStatus()
    const { logout } = useAuth()

	return <div> {status ? (<button onClick={()=>logout()}>Logout</button>) : "Please login"}</div>;
};

export default Status;
