// import React, { useState } from "react";
import list from "./list.module.scss";
import Item from "./Item";
import { ITask } from "../types/tasks";
import React from "react";


// A função useState retorna um array para que possamos desestruturar e pegar os valores de forma simples, apenas utilizando [estado, funcaoQueMudaOEstado]. 
// function List( tasks: ITask[], setTasks: any) { // tasks é o estado e setTasks é a função que altera o estado (useState)  em um array de tarefas (ITask)
  // const [tasks, setTasks] = useState([ // react atualiza o componente pq colocamos um novo item na lista (sendo reativo e nao imperativo como o DOM)
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

  // ]); // useState é um hook que retorna um array com o estado e uma função que altera o estado (setTasks) - vamos utilizar o estado para guardar as tarefas mas no APP

  // let tasks = [
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
  // ];

  class List extends React.Component<{tasks: ITask[], setTasks: any }> {
    render() {
      const { tasks, setTasks } = this.props;
    return (
      <aside className={list.listaTarefas}>
        <h2
          onClick={() => {
            setTasks([...tasks, { name: "Classes", time: "13:00" }]);
          }}
        >
          Classes
        </h2>
        <ul>
          {tasks.map(( task, index ) => ( // map é um loop que percorre o array e retorna um novo array
              <Item 
                key = {index}
                {...task}
                time="13:00"
                // task={task.name} // passa o nome da tarefa como props para o componente Item
                // time={task.time} // passa o tempo da tarefa como props para o componente Item
                // className={list.item}
                // key é um identificador único para cada elemento do array
                // {...task} // spread operator - pega todas as propriedades do objeto e passa como props
              ></Item>
            )
          )}
        </ul>
      </aside>
    );
}
  }

export default List;
