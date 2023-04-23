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
  width: 100%;
  margin-top: 20px;
  flex-direction: row;
  justify-content: flex-end;
`

export const AreaButtomCancel = styled.TouchableOpacity`
  align-items: center;
  background: ${({ theme }) => theme.COLORS.WHITE};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY60};
  border-radius: 8px;
  margin-right: 16px;
  padding: 7px;
  width: 100px;
`
export const ButtonTextCancel = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const AreaButtomDelete = styled.TouchableOpacity`
  background: ${({ theme }) => theme.COLORS.RED};
  border: none;
  border-radius: 8px;
  width: 100px;
  align-items: center;
  padding: 7px;
`
export const ButtonTextDelete = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`
