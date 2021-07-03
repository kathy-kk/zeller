import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import App from './App';
import testData from './testData.json'
import { ListZellerCustomersQuery } from './query/query'
import {render, screen, waitFor} from '@testing-library/react'

const mocks = [
  {
    request: {
      query: ListZellerCustomersQuery
    },
    result: {
      data: testData.data
    }
  }
]

it('renders admin and manager radio buttons with default selected as admin', async() => {
 render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
        </MockedProvider>);
  const buttons = screen.getAllByRole('radio')
  const adminRadioButton = buttons[0] as HTMLInputElement
  const managerRadioButon = buttons[1] as HTMLInputElement
  expect(adminRadioButton.className).toContain('admin')
  expect(adminRadioButton.checked).toBeTruthy()

  expect(managerRadioButon.className).toContain('manager')
  expect(managerRadioButon.checked).not.toBeTruthy()
});

it('is checked if user type is clicked', () => {
render(<MockedProvider mocks={mocks} addTypename={false}>
  <App />
  </MockedProvider>)
const buttons = screen.getAllByRole('radio')
const managerRadioButon = buttons[1] as HTMLInputElement
managerRadioButon.click()
expect(managerRadioButon.checked).toBeTruthy()
});

it('renders empty list if it is loading the query', () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
      </MockedProvider>);
  const list = screen.getByRole('list')
  expect(list.childNodes).toHaveLength(0)
})

it('renders empty list if query fails', async () => {
  const failedMock = [
    {
      request: {
        query: ListZellerCustomersQuery
      },
      error: new Error('Something went wrong')
    }
  ]
  render(
    <MockedProvider mocks={failedMock} addTypename={false}>
      <App />
      </MockedProvider>);
  
  await waitFor(() => {
    const list = screen.getByRole('list')
    expect(list.childNodes).toHaveLength(0)
  });
})

it('renders empty list if data is not in the right format', async () => {
  const wrongDataMocks = [{
    request: {
      query: ListZellerCustomersQuery
    },
    result: {
      data: {listZellerCustomers: [{error:"error"}]}
    }
  }]
  render(
    <MockedProvider mocks={wrongDataMocks} addTypename={false}>
      <App />
      </MockedProvider>);
    
    await waitFor(() => {
      const list = screen.getByRole('list')
      expect(list.childNodes).toHaveLength(0)
    });
})

it('renders list of selected role', async() => {
  render(
  <MockedProvider mocks={mocks} addTypename={false}>
    <App />
    </MockedProvider>);
  
  await waitFor(() => {
    const list = screen.getByRole('list')
    expect(list.childNodes).toHaveLength(3)
  
    const buttons = screen.getAllByRole('radio')
    const managerRadioButon = buttons[1] as HTMLInputElement
    managerRadioButon.click()
    expect(list.childNodes).toHaveLength(4)
  });
})

