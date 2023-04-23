import styled from 'styled-components/native'

export const Container = styled.View`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY60};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  margin: 0 24px 24px 24px;
  height: auto;
`
export const Header = styled.View`
  background: ${({ theme }) => theme.COLORS.BLUE};
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 24px;
  width: 100%;
`

export const HeaderTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  max-width: 80%;
`

export const ContextArea = styled.View`
  margin: 24px;
`

export const HeaderContext = styled.View`
  justify-content: space-between;
  margin-bottom: 16px;
  width: 100%;
`

export const Username = styled.Text`
  color: ${({ theme }) => theme.COLORS.DARKGRAY1};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  width: 100%;
`

export const Time = styled.Text`
  color: ${({ theme }) => theme.COLORS.DARKGRAY1};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`

export const AreaTextContext = styled.View`
  flex: 1;
  min-height: 100%;
`

export const TextContext = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  min-height: 100%;
`
