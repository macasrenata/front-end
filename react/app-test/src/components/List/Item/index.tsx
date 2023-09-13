import { ITask } from "../../types/tasks";
import item from "./item.module.scss";


interface ItemProps extends ITask { // ItemProps é um tipo que recebe todas as propriedades de ITask
  taskSelect: (selected: ITask) => void; // é uma funcao que espera receber uma tarefa e nao retorna nada
}


export default function Item({ name, time, selected, completed, id, taskSelect}: ItemProps) {
  // validar pq scss nao ta funcionando
  return (
    <li 
    className={`${item.item} ${selected ? item.itemSelecionado : ''}` } // className é uma string que recebe o nome da classe e pode receber uma condição, aqui utilizo ternario para verificar se a tarefa está selecionada
    onClick={() => taskSelect({
      id, time, name, selected, completed
    })}
    >
      <h3>{name}</h3>
      <span>{time}</span>
    </li>
  );
}
