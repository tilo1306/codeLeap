import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.GRAY};
  padding: 0 1.5rem 1.5rem 1.5rem;
  width: 100vw;
  min-height: 100vh;
`

export const ArearForm = styled.div`
  background: ${({ theme }) => theme.COLORS.WHITE};
  height: auto;
  margin: 0 auto;
  padding-bottom: 1.5rem;
  max-width: 50rem;
`
export const Header = styled.header`
  align-items: center;
  background: ${({ theme }) => theme.COLORS.BLUE};
  display: flex;
  flex: 1;
  height: 5rem;
  padding-left: 2.313rem;
`
export const Title = styled.h1`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-weight: 700;
`
export const AreaButton = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1.5rem;
`
