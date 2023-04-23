import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  background: ${({ theme }) => theme.COLORS.GRAY};
  display: flex;
  height: 100vh;
  padding: 1.5rem;
  justify-content: center;
`
export const AreaLogin = styled.form`
  background: ${({ theme }) => theme.COLORS.WHITE};
  border: 1px solid #cccccc;
  border-radius: 16px;
  margin: 1.5rem;
  max-width: 31.25rem;
  min-height: 12.813rem;
  padding: 1.5rem;
`
export const Title = styled.h1`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-weight: 700;
`
export const Text = styled.p`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  margin: 1.5rem 0 0.5rem 0;
`

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.COLORS.DARKGRAY1};
  border-radius: 8px;
  height: 2rem;
  padding: 0.7rem;
  width: 100%;
`
export const Div = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`
