import styled from "styled-components";


export const Container = styled.div`
    align-items: center;
    background: ${({theme})=> theme.COLORS.WHITE};
    display: flex;
    height: 100vh;
    justify-content: center;
    width: 100vw;
`

export const Image = styled.img`
animation: flasher  2s infinite;

 @keyframes flasher {
    0% { opacity: 0; }
    50% { opacity: 0.5; }
    100% { opacity: 1; }
 }
`