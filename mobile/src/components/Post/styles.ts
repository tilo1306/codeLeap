import styled from 'styled-components/native'

export const AreaPost = styled.View`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY60};
  border-radius: 16px;
  margin: 24px;
  padding: 24px;
  width: auto;
`

export const HeaderTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  margin: 24px 0 8px 0;
`

export const InputTitle = styled.TextInput`
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.DARKGRAY1};
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  padding: 8px 11px;
  width: 100%;
`

export const TextArea = styled.TextInput`
  border: 1px solid ${({ theme }) => theme.COLORS.DARKGRAY1};
  border-radius: 8px;
  height: 74px;
  padding: 7px 11px;
  width: 100%;
`
export const AreaButton = styled.View`
  width: 100%;
  display: flex;
  margin-top: 24px;
  align-items: flex-end;
`
