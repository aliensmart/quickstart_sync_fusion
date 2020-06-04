import React from 'react';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import './App.css';


function App() {
  var iconList = ['e-search', 'e-upload', 'e-font', 'e-Pdf_Export'];
        const listItems = iconList.map((icon, index) =>
            <li><span className={`e-icons ${icon}`} key={index}></span></li>
            );
            var icons = `
            .e-search:before {
                content:'\\e993';
                font-size: 30px;
                background-color: red;
            }
            .e-upload:before {
                content: '\\e725';
            }
            .e-font:before {
                content: '\\e34c';
            }
            .e-Pdf_Export:before{
              content: '\\e240';
              color: red;
              font-size: 30px
            }
            `
  return (
    <div className="App">
        <ButtonComponent type="primary">Button</ButtonComponent>
        <style>{icons}</style>
                <div className="icons">
                    <ul>
                        {listItems}
                    </ul>
                </div>

    </div>
  );
}

export default App;
