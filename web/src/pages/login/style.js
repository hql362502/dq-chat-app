import styled from "styled-components";

export const LoginWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    background-color: #131424;
    .brand{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem 1rem;
        gap: 1rem;
        img{
            width: 5rem;
        }
        h1{
            text-transform: uppercase;
            color: white;
        }
    }  
    form{
        display:flex;
        flex-direction: column;
        max-width: 90vw;
        gap: 2rem;
        border-radius: 2rem;
        background-color: #00000076;
        padding: 3rem 3rem;
        input{
            width:100%;
            border: 0.1rem solid #4e0eff;
            background-color: transparent;
            font-size: 1rem;
            border-radius: 0.4rem;
            padding: 1rem;
            color: white;
            &:focus{
                outline: 0;
                border: 0.1rem solid #997af0;
            }
        }
        button{
            font-size: 1rem;
            padding: 1rem;
            border-radius: 0.4rem;
            color: white;
            transition: all 0.4s ease-in-out;
            background-color: #997af0;
            text-transform: uppercase;
            cursor: pointer;
            &:hover{
                background-color: #4e0eff;
            }
        }
        span{
            display: inline-block;
            
            display: flex;
            justify-content: space-between;
            color: white;
            font-size: 1rem;
            text-transform: uppercase;
            gap: 2rem;
            a{
                color: #4e0eff;
                font-weight: bold;
                text-decoration: none;
            }
        }
    }
`