import list from "./list.module.scss";
import Item from "./Item";
import { ITask } from "../types/tasks";

  interface ListProps {
    tasks: ITask[];
    taskSelect: (taskSelected: ITask) => void; // é uma funcao que espera receber uma tarefa e nao retorna nada
  }

  function List({ tasks, taskSelect }: ListProps) {
    return (
      <aside className={list.listaTarefas}>
         <h2> Estudos do dia </h2>
      <ul>
        {tasks.map((item) => (
          <Item
            taskSelect={taskSelect}
            key={item.id}
            {...item}
          />
        ))}
      </ul>
      </aside>
    );
}


export default List;
