import styled from 'styled-components/native'

export const ModalUpdateArea = styled.Modal``
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
export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  margin: 12px 0 8px 0;
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

export const AreaButtomSave = styled.TouchableOpacity`
  background: ${({ theme }) => theme.COLORS.RED};
  border: none;
  border-radius: 8px;
  width: 100px;
  align-items: center;
  padding: 7px;
`
export const ButtonTextSave = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`
