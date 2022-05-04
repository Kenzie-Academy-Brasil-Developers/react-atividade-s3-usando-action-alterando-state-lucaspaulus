import styled from "styled-components";

export const Container = styled.div`
    background-color: brown;
    padding: 50px;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
 
    h2{
         
        text-align: left;
        color: #420101;
        border-bottom: 2px dotted;
    }
    input{
        padding-left: 10px;
        height: 45px;
        border-radius: 50px;
        outline: none;
        border: 2px solid white;
        box-sizing: border-box;
        background-color: #42010199;
        color: white;
    }

    button{
        background-color: #380007;
        width: 100px;
        height: 45px;
        border-radius: 25px;
        margin-left: 15px;
        box-sizing: border-box;
        color: white;
        font-size: 18px;
        font-weight: bold;
        border: 2px solid white;
        align-self: end;
        margin-top: 15px;
    }

`