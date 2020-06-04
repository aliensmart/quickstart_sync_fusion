import React, {useState, useEffect} from 'react';
import { Animation } from '@syncfusion/ej2-base';
import './App.css';

function App() {
  let animation = new Animation({ name: 'FadeIn', duration: 5000 });
    animation.animate(this.element1, { name: 'FadeOut' });
    animation.animate(this.element2, { name: 'ZoomOut' });
  useEffect(()=>{
        
    
}, [])

  return (
    <div className="App">
        <div id="element1" ref={(ele) => { this.element1 = ele; }}></div>
        <div id="element2" ref={(ele) => { this.element2 = ele; }}></div>

    </div>
  );
}

export default App;
