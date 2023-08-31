import list from "../list.module.scss";

export function Item(props: { task: { name: string; time: string }; index: number }) {
  const { task, index } = props;
  return (
    <li
      key={index}
      className={list.item} // key é um identificador único para cada elemento do array
    >
      <h3>{task.name}</h3>
      <span>{task.time}</span>
    </li>
  );
}

export default Item;
