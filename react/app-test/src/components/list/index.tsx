import React from "react";
import list from "./list.module.scss";

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
        {tasks.map((task, index) => (
          <li key={index} className={list.item}>
            <h3>{task.name}</h3>
            <span>{task.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default List;
