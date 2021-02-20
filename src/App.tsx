import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (<div>
    <Pantry></Pantry>
  </div>);
}

function Pantry() {
  const [items, setItems] = useState<string[]>([])
  const [newItem, setNewItem] = useState('')
  return <div>
    <form onSubmit={(e) => {
      e.preventDefault()

      if (newItem === '') return null
      
      setItems([...items, newItem])
      setNewItem('')
    }}>
      <input type="text" value={newItem} onChange={e => {setNewItem(e.target.value)}}></input>
      <button type="submit">Save</button>
    </form>
    <ul>
      {items.map(item => (<li>{item}</li>))}
    </ul>
  </div>
}
export default App;
