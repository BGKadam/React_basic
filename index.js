import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MainDemo, SubDemo, MyDemo } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <App />
    <MainDemo />
    <SubDemo />
    <MyDemo />
  </React.StrictMode>
);


