import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Clock from './Clock';
import Toggle from './Toggle'
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
    <Clock />,
    document.getElementById('clock')
);

ReactDOM.render(
    <Toggle />,
    document.getElementById('toggle')
);
