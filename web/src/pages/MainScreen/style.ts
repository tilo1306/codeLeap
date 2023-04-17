import styled from "styled-components";


export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({theme})=> theme.COLORS.WHITE};
`

export const Image = styled.img`
animation: flasher  2s infinite;

 @keyframes flasher {
    0% { opacity: 0; }
    50% { opacity: 0.5; }
    100% { opacity: 1; }
 }
`