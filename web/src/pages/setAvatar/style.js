import styled from "styled-components";
export const SetAvatarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: #131424;
    gap: 4rem;
    .title-container{
        text-align: center;
        max-width: 80%;
        color: #fff;
        h1{
            font-size: 1.8rem;
            letter-spacing: 0.3rem;
        }
    }
    .avatar-container{
        max-width: 80%;
        display: flex;
        gap: 2rem;
        flex-wrap: wrap;
        justify-content: center;
        .avatar{
            cursor: pointer;
            border: 0.4rem solid transparent;
            padding: 0.4rem;
            border-radius: 50%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: all 0.4s ease-in-out;
            img{
                width: 6rem;
                height: 6rem;
                border-radius: 50%;
            }
            &.selected {
                border: 0.4rem solid #4e0eff;
            }
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
`