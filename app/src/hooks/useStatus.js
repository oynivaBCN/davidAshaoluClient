import React, {useState, useEffect} from 'react';
import { useAuth } from './useAuth';

export const useStatus = () => {
	const [status, setStatus] = useState(false);

    const { getSession } = useAuth()

    useEffect(()=>{
        getSession().then(session => {
            // console.log("Session: ", session);
            setStatus(true)
        }).catch((error)=>{
            console.log("Error", error)
        })
    }, [getSession])

	return status
};


