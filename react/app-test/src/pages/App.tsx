import React from 'react';
import Form from '../components/form';
import List from '../components/list';
import app from  './app.module.scss';

function App() {
  return (
    <div className={app.AppStyle}>
      <Form />
      <List />
    </div>
  );
}

export default App;
