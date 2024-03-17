import { useState } from 'react';
import './App.css';
import { Users } from './users'
import Table from './List';
function App() {
  const [query, setQuery] = useState("");
  const keys = ['first_name', 'last_name', 'email'];
  const search = (data) => {
    return data.filter(
      (item) => 
        keys.some(key => item[key].toLowerCase().includes(query))
      )
  }
  return (
    <div className='app'>
      <input type='text' placeholder='Search...' className='search' onChange={e => setQuery(e.target.value)} />
      <ul className='list'>
        {<Table data={search(Users)} />}
      </ul>
    </div>
  )
}

export default App;