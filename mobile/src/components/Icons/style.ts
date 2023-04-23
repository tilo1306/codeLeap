import styled from 'styled-components/native'

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  width: auto;
  height: auto;
`

export const TrashIconArea = styled.TouchableOpacity`
  height: 23px;
  width: 18px;
`
export const TrashIcon = styled.Image`
  flex: 1;
`

export const UnionImg = styled.TouchableOpacity`
  height: 23px;
  position: relative;
  width: 23px;
  margin-left: 25px;
`
export const EditIcon = styled.Image`
  bottom: 0;
  left: 0;
  margin: auto;
  max-height: 100%;
  max-width: 100%;
  position: absolute;
  right: 0;
  top: 0;
`
export const PenIcon = styled.Image`
  bottom: 5px;
  left: 6px;
  margin: auto;
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  right: 0;
  top: 0;
`
