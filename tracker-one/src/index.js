import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Maincontext } from './components/data/Maincontext';

ReactDOM.render(
  <Maincontext children={<App />} />,

  document.getElementById("root")
);