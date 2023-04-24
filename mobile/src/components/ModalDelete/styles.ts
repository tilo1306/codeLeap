import styled from 'styled-components/native'

export const ModalDeleteArea = styled.Modal``
export const Container = styled.View`
  align-items: center;
  background: rgba(119, 119, 119, 0.8);
  flex: 1;
  justify-content: center;
  padding: 24px;
`
export const AreaPopUp = styled.View`
  width: 100%;
  background: ${({ theme }) => theme.COLORS.WHITE};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY60};
  border-radius: 16px;
  flex-direction: column;
  padding: 20px;
`
export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`
export const AreaButton = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 20px;
  width: 100%;
`
