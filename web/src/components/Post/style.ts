import styled from "styled-components";


export const AreaPost = styled.form`
    border:  1px solid ${({theme})=> theme.COLORS.GRAY60};
    border-radius: 16px;
    height: 20.875rem;
    margin: 1.5rem;
    padding: 1.5rem;
`

export const HeaderTitle = styled.h1`
    color: ${({theme})=> theme.COLORS.BLACK};
    font-weight: 700;
    font-size: ${({theme})=> theme.FONT_SIZE.XL}px;
`

export const Text = styled.p`
    color: ${({theme})=> theme.COLORS.BLACK};
    font-size: ${({theme})=> theme.FONT_SIZE.MD}px;
    margin: 1.5rem 0 0.5rem 0;
`

export const Input = styled.input`
    border-radius: 8px;
    border: 1px solid ${({theme})=> theme.COLORS.DARKGRAY1};   
    height: 2rem;
    padding: 0.7rem; 
    width: 100%;
`

export const Div = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem; 
`

export const TextArea = styled.textarea`
    border: 1px solid ${({theme})=> theme.COLORS.DARKGRAY1};   
    border-radius: 8px;
    height: 4.625rem;
    padding: 0.7rem; 
    resize: none;
    width: 100%;
`

export const Buttom = styled.button`
    background: ${({theme})=> theme.COLORS.BLUE};
    border: none;
    border-radius: 8px;
    color: ${({theme})=> theme.COLORS.WHITE};
    font-size: ${({theme})=> theme.FONT_SIZE.MD}px;
    font-weight: 700;
    height: 2rem;
    width: 7.5rem;
    :disabled{
        background-color: white;
    }
`