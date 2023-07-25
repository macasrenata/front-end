import React from "react";
import Button from "../button";

function Form() {
    return (
      <form>
        <div>
          <label htmlFor="task">Add new class:</label>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="What do you want study?"
            required
          />
        </div>
        <div>
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
        <Button />
      </form>
    );
}

export default Form;
