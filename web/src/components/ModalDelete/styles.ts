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
export const AreaMessage = styled.div`
  background: white;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY60};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  max-height: 9.125rem;
  padding: 1.5rem;
  width: 41.75rem;
`
export const Title = styled.h1`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-weight: 700;
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
`
export const AreaButton = styled.div`
  align-items: end;
  display: flex;
  height: 100%;
  justify-content: end;
  width: 100%;
  margin-top: 2.5rem;
  @media (max-width: 546px) {
    height: 100%;
    margin-top: 1rem;
  }
`
