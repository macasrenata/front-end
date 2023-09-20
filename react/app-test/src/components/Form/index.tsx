import React from "react";
import Button from "../Button";
import form from "./form.module.scss";
import { ITask } from "../types/tasks";
import { v4 as uuidv4 } from "uuid";

interface FormProps {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

function Form({ setTasks }: FormProps) {
  const [task, setTask] = React.useState("");
  const [time, setTime] = React.useState("00:00");

  function saveTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTasks((taskOld) => [
      ...taskOld,
      {
        name: task,
        time: time,
        id: uuidv4(),
        completed: false,
        selected: false,
      },
    ]);
    setTask("");
    setTime("00:00");
  }

  return (
    <form className={form.novaTarefa} onSubmit={saveTask}>
      <div className={form.inputContainer}>
        <label htmlFor="task">Add new class:</label>
        <input
          type="text"
          name="task"
          id="task"
          value={task}
          onChange={(event) => setTask(event.target.value)}
          placeholder="What do you want study?"
          required
        />
      </div>
      <div className={form.inputContainer}>
        <label htmlFor="time">Add time:</label>
        <input
          type="time"
          step="1"
          name="time"
          value={time}
          onChange={(event) => {
            setTime(event.target.value);
          }}
          id="time"
          min="00:00:00"
          max="23:59:59"
          required
        />
      </div>
      <Button type="submit">Adicionar</Button>
    </form>
  );
}


export default Form;
