import styled from "styled-components";

export const Container = styled.div`
    align-items: center;
    background: rgba(119, 119, 119, 0.8);
    display: flex;
    height: 100vh;
    justify-content: center;
    left: 0;
    padding: 2.5rem;
    position: absolute;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 1;
`
export const AreaMessage = styled.div`
    background: white;
    border:  1px solid ${({theme})=> theme.COLORS.GRAY60};
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    max-height: 9.125rem;
    padding: 1.5rem;
    width: 41.75rem;    
`
export const Title = styled.h1`
    color:  ${({theme})=> theme.COLORS.BLACK};
    font-weight: 700;
    font-size: ${({theme})=> theme.FONT_SIZE.XL}px;
`
export const AreaButton = styled.div`
    align-items: end;
    display: flex;
    height: 100%;
    justify-content: end;
    width: 100%;
    margin-top: 40px;
`
export const ButtomCancel = styled.button`
    background:  ${({theme})=> theme.COLORS.WHITE};
    border: 1px solid ${({theme})=> theme.COLORS.GRAY60};
    border-radius: 8px;
    color:  ${({theme})=> theme.COLORS.BLACK};
    font-size: ${({theme})=> theme.FONT_SIZE.MD}px;
    font-weight: 700;
    height: 2rem;
    margin-right: 1rem;
    width: 7.5rem;
    :hover:enabled {
        cursor: pointer;
        transform: scale(1.1);
        transition: all 0.5s;
    };
`
export const ButtomDelete = styled.button`
    background:  ${({theme})=> theme.COLORS.RED};
    border-radius: 8px;
    color:  ${({theme})=> theme.COLORS.WHITE};
    font-size: ${({theme})=> theme.FONT_SIZE.MD}px;
    font-weight: 700;
    height: 2rem;
    width: 7.5rem;
    border: none;
    :hover:enabled {
        cursor: pointer;
        transform: scale(1.1);
        transition: all 0.5s;
    };
`