import React, { useState } from 'react';
import './App.css';

function App() {

  const [value, setValue] = useState('')


  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleClick = (value) => {

    let count = {};

    for (let i = 0; i < value.length; i++) {
      if (count[value[i]]) {
        count[value[i]]++;
      } else {
        count[value[i]] = 1
      }
    }
    for (let key in count) {
      if (count[key] > 1)
        console.log(key + ", count = " + count[key]);
    }

  }



  return (
    <div>
      <input type={'text'} value={value} onChange={handleChange} />
      <button onClick={() => handleClick(value)}>Submit</button>
    </div>
  );
}

export default App;
