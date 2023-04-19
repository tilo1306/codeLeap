import styled from "styled-components"


export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  height: auto;
  @media (max-width: 605px) {
    margin-left: 1rem;
    align-items: center;
    justify-content: center;
  }
`
export const TrashIcon = styled.img`
    height: 1.406rem;
    width: 1.125rem;

`
export const UnionImg = styled.div`
    height: 1.406rem;
    position: relative;
    width: 1.463rem;
    margin-left: 2.125rem;
    @media (max-width: 605px) {
      margin-left: 1rem;
      align-items: center;
      justify-content: center;
    }

`
export const EditIcon = styled.img`
  bottom: 0;
  left: 0;
  margin: auto;
  max-height: 100%;
  max-width: 100%;
  position: absolute;
  right: 0;
  top: 0;
`
export const PenIcon = styled.img`
  bottom: 0.325rem;
  left: 0.325rem;
  margin: auto;
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  right: 0;
  top: 0;
`
