import styled from 'styled-components'

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
export const AreaModal = styled.form`
  background: white;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY60};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  max-height: 20.875rem;
  padding: 1.5rem;
  width: 41.75rem;
`

export const HeaderTitle = styled.h1`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-weight: 700;
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
`

export const Text = styled.p`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  margin: 1.5rem 0 0.5rem 0;
  max-width: 100%;
`

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.COLORS.DARKGRAY1};
  border-radius: 8px;
  height: 2rem;
  padding: 0.7rem;
  max-width: 100%;
`

export const TextArea = styled.textarea`
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.DARKGRAY1};
  height: 74px;
  padding: 0.7rem;
  resize: none;
  max-width: 100%;
`

export const AreaButton = styled.div`
  align-items: end;
  display: flex;
  justify-content: end;
  margin-top: 1.5rem;
  max-width: 100%;
`
