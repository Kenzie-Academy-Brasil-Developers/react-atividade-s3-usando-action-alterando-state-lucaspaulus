import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux"
import {changeName} from "../../store/modules/user/action"

function UseCard() {
    
    const [userName, setUserName] = useState("")
    const dispatch = useDispatch()
    const user = useSelector((state)=> state.user)


    const handleClick = () =>{
        dispatch(changeName(userName))
        
    }

    return (
        <div>
            <h2>User name: {user.name}</h2>
            <input onChange={(event)=> setUserName(event.target.value)} type="text" />
            <button onClick={handleClick}>Change</button>
        </div>
    )
}

export default UseCard;
