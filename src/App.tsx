import React, { useState } from 'react';
import UserTypeOptions from './components/userTypeOptions'
import { ADMIN, MANAGER } from './types/userType'
import  UserListComponent, { User } from './components/userList'
import { useQuery } from '@apollo/client';
import { ListZellerCustomersQuery } from './query/query'
import './App.css'

interface ListZellerCustomers {
  items: User[]
}
interface CustomerListData {
  listZellerCustomers: ListZellerCustomers
}

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  let options = [ADMIN, MANAGER]
  const { data } = useQuery<CustomerListData>(ListZellerCustomersQuery)

  const handleSelectChange = (event:React.ChangeEvent<HTMLInputElement>) => {
     event.persist()
      setSelectedIndex(options.indexOf(event.target.value))
  }
  return (
    <div className='App'>
       <UserTypeOptions handleSelectChange = {handleSelectChange} selectedIndex={selectedIndex} options={options}/>
       <UserListComponent list = {data?.listZellerCustomers?.items||[]} selectedRole={options[selectedIndex]}/>
    </div>
  );
}

export default App;
