import React from "react";
import Button from "../button";
import form from "./form.module.scss";

function Form() {
    return (
      <form className={form.novaTarefa}>
        <div className={form.inputContainer}>
          <label htmlFor="task">Add new class:</label>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="What do you want study?"
            required
          />
        </div>
        <div className={form.inputContainer}>
        <label htmlFor='time'>Add time:</label>
          <input
            type="time"
            step='1'
            name="time"
            id="time"
            min={new Date().toLocaleTimeString()}
            max={new Date().toLocaleTimeString()}
            required
          />
        </div>
        <Button> 
          Adicionar
        </Button>
      </form>
    );
}

export default Form;
