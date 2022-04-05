import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


/*

"start": "react-scripts start",
"build": "concurrently \"npm run server\" \"react-scripts build\",
"test": "react-scripts test",
"eject": "react-scripts eject",
"server": "node public/index.js",
"client": "npm start index.js",
"dev": "concurrently \"npm run server\" \"npm run client\""

*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
