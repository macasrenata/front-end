import { ITask } from "../../types/tasks";
import style from "./item.module.scss";


interface ItemProps extends ITask { // ItemProps é um tipo que recebe todas as propriedades de ITask
  taskSelect: (selected: ITask) => void; // é uma funcao que espera receber uma tarefa e nao retorna nada
}


export default function Item({ name, time, selected, completed, id, taskSelect}: ItemProps) {
  // validar pq scss nao ta funcionando
  return (
    <li 
    className={ `${style.item} ${selected ? style.itemSelecionado : ''} ${completed ? style.itemCompletado : ''}` } // className é uma string que recebe o nome da classe e pode receber uma condição, aqui utilizo ternario para verificar se a tarefa está selecionada
    onClick={() => !completed && taskSelect({
      id, time, name, selected, completed
    })}
    >
      <h3>{name}</h3>
      <span>{time}</span>
      {completed && <span className={style.concluido} aria-label="Finish">Concluído</span>} {/* renderização condicional */}
    </li>
  );
}
