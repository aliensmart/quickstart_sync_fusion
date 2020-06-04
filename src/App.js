import React, {useState, useEffect} from 'react';
import './App.css';
import { Draggable, Droppable } from '@syncfusion/ej2-base';

function App() {
  let droppable = ()=>{ new Droppable(document.getElementById('droppable'), {
    drop: (e) => {
        e.droppedElement.querySelector('#drag').textContent = 'Dropped';
    }
  });
}
  useEffect(()=>{
    let draggable = new Draggable(document.getElementById('draggable'), { clone: false });
    droppable()
        
}, [droppable])

  return (
    <div className="App" id='container'>
        {/* <div id='element'><p>Draggable Element</p></div> */}
        <div id='droppable'><p>Droppable Target </p></div>
        <div id='draggable'><p id='drag'>Draggable Element </p></div>
        
    </div>
  );
}

export default App;
