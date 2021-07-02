import React from 'react'
import RadioButton, { RadioButtonLabel, Wrapper, Item } from './styled/radioButton'

interface UserTypeOptions {
    options: Array<string>,
    selectedIndex: number,
    handleSelectChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const UserTypeOptionsAction = (props: UserTypeOptions) => {
  const { options, selectedIndex, handleSelectChange } = props
  return (<Wrapper>
          {options.map((option, index) => 
              <Item key={index}>
              <RadioButton 
               key = {index}
               className={options[index].toLocaleLowerCase()}
               type="radio"
               name="radio"
               value={options[index]}
               checked={selectedIndex === index}
               onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleSelectChange(event)}
              />
              <RadioButtonLabel />
              <div>{option}</div>
              </Item>
              )}
  </Wrapper>)
}
export default UserTypeOptionsAction