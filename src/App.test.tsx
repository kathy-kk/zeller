import React from 'react';
import { mount } from 'enzyme';
import RadioButton from './components/styled/radioButton'
import App from './App';
import { act } from 'react-dom/test-utils';
test('renders admin and manager radio buttons with default selected as admin', () => {
  const wrapper = mount(<App />);
  const buttons = wrapper.find(RadioButton)
  const amdinChecked = buttons.get(0).props.checked
  const managerChecked = buttons.get(1).props.checked
  expect(buttons).toHaveLength(2)
  expect(amdinChecked).toBe(true)
  expect(managerChecked).toBe(false)
});

test('checked if user type is clicked', () => {
  const wrapper = mount(<App />);
  const buttons = wrapper.find('input')
  act(() => {
    buttons.get(1).props.onChange({ target: { checked: true, value:'Manager' }, persist:() => {} })
  })
  wrapper.update()
  expect( wrapper.find('input').get(1).props.checked).toBe(true)
});
