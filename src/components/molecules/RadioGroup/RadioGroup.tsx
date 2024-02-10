import React, { ReactNode } from 'react'
import { Radio } from '@components/atoms/Radio'

interface RadioGroupProps {
  name: string
  selectedValue: string
  onClickRadioButton: (value: string) => void
  children: ReactNode
}

export const RadioGroup = ({
  name,
  selectedValue,
  onClickRadioButton,
  children,
  ...rest
}: RadioGroupProps) => {
  const handleRadioChange = (value: string) => {
    onClickRadioButton(value)
  }

  return (
    <form role="radiogroup" {...rest} name={name}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === Radio) {
          return React.cloneElement(child, {
            ...child.props,
            checked: selectedValue === child.props.value,
            onChange: () => handleRadioChange(child.props.value),
            name,
          })
        }
        return child
      })}
    </form>
  )
}
