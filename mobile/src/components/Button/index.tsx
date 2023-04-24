import {
  IButtonStyles,
  ITextStyles,
  PrimaryStyles,
  PrimaryStylesText,
  SecondaryStyles,
  SecondaryStylesText,
  TertiaryStyles,
  TertiaryStylesText,
  QuaternaryStyles,
  QuaternaryStylesText,
  QuinaryStyles,
  QuinaryStylesText,
  SenaryStyles,
  SenaryStylesText
} from './styles'

import { TextProps, TouchableOpacityProps } from 'react-native'

type Props = TouchableOpacityProps & {
  title: string
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
  senary: SenaryStyles
}

const buttontextStyleTypes: ITextStyles = {
  primary: PrimaryStylesText,
  secondary: SecondaryStylesText,
  tertiary: TertiaryStylesText,
  quaternary: QuaternaryStylesText,
  quinary: QuinaryStylesText,
  senary: SenaryStylesText
}

export function Button({ title, styleType = 'primary', ...rest }: Props) {
  const ButtonStyles = buttonStyleTypes[styleType]
  const ButtonTextStyles = buttontextStyleTypes[styleType]

  return (
    <ButtonStyles {...rest}>
      <ButtonTextStyles>{title}</ButtonTextStyles>
    </ButtonStyles>
  )
}
