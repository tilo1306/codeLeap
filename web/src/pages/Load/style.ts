import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.COLORS.WHITE};
  display: flex;
  flex: 1;
  height: 100vh;
  justify-content: center;
  padding: 1.5rem;
`

export const Image = styled.img`
  max-width: 37.969rem;
  animation: flasher 2s infinite;

  @keyframes flasher {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`
