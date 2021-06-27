import React, { useState } from 'react';
import UserTypeOptions from './components/userTypeOptions'
import { ADMIN, MANAGER } from './types/userType'


function App() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  let options = [ADMIN, MANAGER]
  const handleSelectChange = (event:React.ChangeEvent<HTMLInputElement>) => {
     event.persist()
      setSelectedIndex(options.indexOf(event.target.value))
  }
  return (
    <div className="App">
       <UserTypeOptions handleSelectChange = {handleSelectChange} selectedIndex={selectedIndex} options={options}/>
    </div>
  );
}

export default App;
