import { ITask } from "../../types/tasks";
import list from "../list.module.scss";

export default function Item({ name, time, selected, completed, id}: ITask) {
  console.log("item atual:", {name, time, selected, completed, id});
  return (
    <li
      className={list.item} // key é um identificador único para cada elemento do array
    >
      <h3>{name}</h3>
      <span>{time}</span>
    </li>
  );
}
