import { TextStyles } from './styles'

interface TextProps {
  text: string
}

export const TextCategories = ({ text }: TextProps) => {
  return <TextStyles>{text}</TextStyles>
}
