import React from 'react'

import {
  IButtonStyles,
  PrimaryStyles,
  SecondaryStyles,
  TertiaryStyles,
  QuaternaryStyles,
  QuinaryStyles,
  SenaryStyles,
} from './styles'

interface IProps {
  type: 'button' | 'reset' | 'submit'
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  styleType?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'quaternary'
    | 'quinary'
    | 'senary'
  disabled?: boolean
}

const buttonStyleTypes: IButtonStyles = {
  primary: PrimaryStyles,
  secondary: SecondaryStyles,
  tertiary: TertiaryStyles,
  quaternary: QuaternaryStyles,
  quinary: QuinaryStyles,
  senary: SenaryStyles,
}

export function Button({
  children,
  type,
  onClick,
  disabled,
  styleType = 'primary',
}: IProps) {
  const ButtonStyles = buttonStyleTypes[styleType]

  return (
    <ButtonStyles type={type} onClick={onClick} disabled={disabled}>
      {children}
    </ButtonStyles>
  )
}
