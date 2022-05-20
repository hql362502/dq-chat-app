import styled from "styled-components";
export const ChatWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #131424;
    gap: 1rem;
    flex-direction: column;
    .container{
        height:85vh;
        width:85vw;
        background-color: #00000076;
        display: grid;
        grid-template-columns: 25% 75%;
        @media screen and (min-width: 720px) and (max-width: 1080px){ 
            grid-template-columns: 35% 65%;
        }
    }
`