import React, {useState, useEffect} from 'react';
import './App.css';
import { Draggable } from '@syncfusion/ej2-base';

function App() {
  useEffect(()=>{
    let draggable = new Draggable(document.getElementById('element'), { clone: false });
}, [])

  return (
    <div className="App" id='container'>
        <div id='element'><p>Draggable Element</p></div>
    </div>
  );
}

export default App;
