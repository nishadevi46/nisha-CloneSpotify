import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StateProvider } from './utlis/StateProvider';
import { intialState, reducer } from './utlis/reducer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <StateProvider intialState={intialState} reducer={reducer}>
    <App/>
   </StateProvider>
  </React.StrictMode>
);


