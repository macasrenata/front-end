import React from 'react';
import Form from '../components/form';
import List from '../components/list';
import app from  './app.module.scss';
import Cronometro from '../components/Cronometro';

function App() {
  return (
    <div className={app.AppStyle}>
      <Form />
      <List />
      <Cronometro />
    </div>
  );
}

export default App;
