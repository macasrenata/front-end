import React from "react";
import list from "./list.module.scss";
import Item from "./Item";

function List() {
  const tasks = [
    {
      name: "React",
      time: "10:00",
    },
    {
      name: "English",
      time: "11:00",
    },
    {
      name: "Javascript",
      time: "12:00",
    },
  ];
  return (
    <aside className={list.listaTarefas}>
      <h2>Classes</h2>
      <ul>
        {tasks.map(
          (
            task,
            index // map é um loop que percorre o array e retorna um novo array
          ) => (
            <Item
              index={index} // key é um identificador único para cada elemento do array
              task={task}
              // {...task} // spread operator - pega todas as propriedades do objeto e passa como props
            ></Item>
          )
        )}
      </ul>
    </aside>
  );
}

export default List;
