import styled from 'styled-components'

export const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY60};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  margin: 1.5rem;
  height: auto;
`
export const Header = styled.header`
  background: ${({ theme }) => theme.COLORS.BLUE};
  border-radius: 0.875rem 0.875rem 0 0;
  display: flex;
  flex-direction: row;
  min-height: 4.375rem;
  justify-content: space-between;
  padding: 1.5rem;
  width: 100%;
`

export const HeaderTitle = styled.h1`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-weight: 700;
  max-width: 80%;
  overflow: hidden;
  word-wrap: break-word;
  @media (max-width: 455px) {
    font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  }
`

export const ContextArea = styled.div`
  box-sizing: border-box;
  height: 100%;
  margin: 1.5rem;
  text-overflow: ellipsis;
`

export const HeaderContext = styled.header`
  display: flex;
  height: 1.125rem;
  justify-content: space-between;
  margin-bottom: 1rem;
  width: 100%;
  @media (max-width: 455px) {
    display: flex;
    flex-direction: column;
    height: auto;
  }
`

export const Text = styled.p`
  color: ${({ theme }) => theme.COLORS.DARKGRAY1};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-weight: 700;

  @media (max-width: 455px) {
    margin-top: 0;
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  }
`

export const Time = styled.time`
  color: ${({ theme }) => theme.COLORS.DARKGRAY1};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  @media (max-width: 450px) {
    margin-top: 0.3rem;
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  }
`

export const AreaTextContext = styled.div`
  flex: 1;
  min-height: 100%;
  overflow: hidden;
  text-overflow: clip;
`

export const TextContext = styled.p`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  word-wrap: break-word;

  @media (max-width: 450px) {
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  }
`
