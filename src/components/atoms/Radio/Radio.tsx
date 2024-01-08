import { Fill, Input, Root } from './styles'

export interface RadioProps {
  onChange?: (value: string) => void
  value: string
  labelText?: string
  checked?: boolean
  name?: string
}

export const Radio = ({ value, checked, name, onChange }: RadioProps) => {
  const handleRadioChange = () => {
    onChange && onChange(value)
  }

  return (
    <Root>
      <Input
        type="radio"
        onChange={handleRadioChange}
        name={name}
        value={value}
        checked={checked}
        aria-checked={checked}
      />
      <Fill />
    </Root>
  )
}
