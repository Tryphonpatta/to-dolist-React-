import React, { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setItems([...items, { text: newItem, completed: false }]);
    setNewItem('');
    console.log(items);
  };

  const handleComplete = (index) => {
    const newItems = [...items];
    newItems[index].completed = !newItems[index].completed;
    setItems(newItems);
  };

  const handleDelete = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };
function checkcomplete(){
  let count = 0;
  for(let i = 0 ;i<items.length;i++){
    if(items[i].completed === true)
    count += 1;
  }
  return count
}
  return (
    <div>
      <form onSubmit={handleSubmit} className='form'>
        <input
          type="text"
          placeholder="Add new item"
          value={newItem}
          onChange={(event) => setNewItem(event.target.value)}
        />
        <button type="submit" style={ {fontFamily: 'Nova Mono',fontSize : '12px'}}>Add</button>
      </form>
        <div className='stat'>
          <p>all {items.length}</p>
          <p>completed {checkcomplete()}</p>
        </div>
      
      <ul>
        {items.map((item, index) => (
          <li key={index} className={item.completed ? 'completed' : ''}>
            <span onClick={() => handleComplete(index)} style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>{item.text}</span>
            <button onClick={() => handleDelete(index)} className='butt'>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;