import React, { useState } from 'react';
import Form from '../components/form';
import List from '../components/list';
import app from  './app.module.scss';
import Cronometro from '../components/Cronometro';
import { ITask } from '../components/types/tasks';

function App() {
   const [tasks, setTasks] = useState<ITask[] | []>([]); // useState é um hook que retorna um array com o estado e uma função que altera o estado (setTasks) - vamos utilizar o estado para guardar as tarefas mas no APP
  //  ([ // react atualiza o componente pq colocamos um novo item na lista (sendo reativo e nao imperativo como o DOM)
  //   {
  //     name: "React",
  //     time: "10:00",
  //   },
  //   {
  //     name: "English",
  //     time: "11:00",
  //   },
  //   {
  //     name: "Javascript",
  //     time: "12:00",
  //   },

  // ]);
  return (
    <div className={app.AppStyle}>
      <Form setTasks={setTasks}/>
      <List 
        tasks={tasks} // passa o estado como props para o componente List
        setTasks={setTasks} // passa a função que altera o estado como props para o componente List
      />
      <Cronometro />
    </div>
  );
}

export default App;
