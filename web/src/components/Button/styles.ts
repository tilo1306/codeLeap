/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { StyledComponent } from 'styled-components'

export interface IButtonStyles {
  [key: string]: StyledComponent<'button', any, {}, never>
}

export const PrimaryStyles = styled.button`
  background: ${({ theme }) => theme.COLORS.WHITE};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY60};
  border-radius: 8px;
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-weight: 700;
  height: 2rem;
  margin-right: 1rem;
  width: 7.5rem;
  :hover:enabled {
    cursor: pointer;
    transform: scale(1.1);
    transition: all 0.5s;
  }
`

export const SecondaryStyles = styled.button`
  background: ${({ theme }) => theme.COLORS.GREEN};
  border: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  height: 2rem;
  font-weight: 700;
  width: 7.5rem;
  :enabled {
    animation: flasher 1s;

    @keyframes flasher {
      0% {
        opacity: 0.3;
      }
      50% {
        opacity: 0.7;
      }
      100% {
        opacity: 1;
      }
    }
  }
  :hover:enabled {
    cursor: pointer;
    transform: scale(1.1);
    transition: all 0.5s;
  }
  :disabled {
    opacity: 0.3;
  }
`

export const TertiaryStyles = styled.button`
  background: ${({ theme }) => theme.COLORS.RED};
  border-radius: 8px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-weight: 700;
  height: 2rem;
  width: 7.5rem;
  border: none;
  :hover:enabled {
    cursor: pointer;
    transform: scale(1.1);
    transition: all 0.5s;
  }
`

export const QuaternaryStyles = styled.button`
  background: ${({ theme }) => theme.COLORS.BLUE};
  border: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-weight: 700;
  height: 2rem;
  width: 7.5rem;
  :disabled {
    background-color: white;
  }
`

export const QuinaryStyles = styled.button`
  background: ${({ theme }) => theme.COLORS.BLUE};
  border: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  height: 2rem;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-weight: 700;
  width: 6.938rem;
  :enabled {
    animation: flasher 1s;

    @keyframes flasher {
      0% {
        opacity: 0.3;
      }
      50% {
        opacity: 0.7;
      }
      100% {
        opacity: 1;
      }
    }
  }
  :hover:enabled {
    cursor: pointer;
    transform: scale(1.1);
    transition: all 0.5s;
  }
  :disabled {
    opacity: 0.3;
  }
`

export const SenaryStyles = styled.button`
  background: ${({ theme }) => theme.COLORS.BLUE};
  border: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-weight: 700;
  height: 2rem;
  width: 7.5rem;
  :disabled {
    background: ${({ theme }) => theme.COLORS.WHITE};
  }
  @media (max-width: 637px) {
    width: 7rem;
  }
  @media (max-width: 580px) {
    width: 6rem;
  }
  @media (max-width: 520px) {
    width: 5rem;
  }
  @media (max-width: 460px) {
    width: 4rem;
  }
  @media (max-width: 400px) {
    width: 3rem;
  }
`
