import React, { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import app from  './app.module.scss';
import Cronometro from '../components/Cronometro';
import { ITask } from '../components/types/tasks';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]); // useState é um hook que retorna um array com o estado e uma função que altera o estado (setTasks) - vamos utilizar o estado para guardar as tarefas mas no APP
  const [selectedTask, setSelectedTask] = useState<ITask>(); // useState é um hook que retorna um array com o estado e uma função que altera o estado (setTasks) - vamos utilizar o estado para guardar as tarefas mas no APP
  
  function handleSelectedTask(taskSelected: ITask) {
    setSelectedTask(taskSelected);
    setTasks(tasksBefore => tasksBefore.map(task => ( {
      ...task,
      selectedTask: task.id === taskSelected.id ? true : false,
      // utilizando ternario para verificar se o id da tarefa é igual ao id da tarefa selecionada
    })));
  } // função que recebe uma tarefa e seta ela no estado selectedTask

  function handleCompletedTask() {
    setSelectedTask(undefined);
    if (selectedTask) {
      setTasks(tasksBefore => tasksBefore.map(task =>  {
        if (task.id === selectedTask.id) {
          return {
            ...task,
            completed: true,
            selected: false,
          }
        }
        return task;
      }));
    }  
  }
  
  
  return (
    <div className={app.AppStyle}>
      <Form setTasks={setTasks}/>
      <List 
        tasks={tasks} // passa o estado como props para o componente List
        taskSelect={handleSelectedTask} // passa a função que seta a tarefa selecionada como props para o componente List
      />
      <Cronometro 
      selected={selectedTask}
      handlerCompletedTask={handleCompletedTask}
      />
    </div>
  );
}

export default App;
