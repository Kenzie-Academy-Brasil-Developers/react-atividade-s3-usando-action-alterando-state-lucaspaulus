import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux"
import {changeName} from "../../store/modules/user/action"
import * as S from "./style.js"
function UseCard() {
    
    const [userName, setUserName] = useState("")
    const dispatch = useDispatch()
    const user = useSelector((state)=> state.user)


    const handleClick = () =>{
        dispatch(changeName(userName))
        
    }

    return (
        <S.Container>
            <h2>User name: {user.name}</h2>
            <input onChange={(event)=> setUserName(event.target.value)} type="text" />
            <button onClick={handleClick}>Change</button>
        </S.Container>
    )
}

export default UseCard;
