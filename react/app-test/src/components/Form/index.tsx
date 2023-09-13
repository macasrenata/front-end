import React from "react";
import Button from "../Button";
import form from "./form.module.scss";
import { ITask } from "../types/tasks";
import { v4 as uuidv4 } from 'uuid';



// function Form() { aqui é uma função e não uma classe (componente funcional)
  class Form extends React.Component <{
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>> // declara o tipo de props que o componente vai receber / prop é sempre um objeto { funções dentro do objeto}
  }> { 
   state = { // state é um objeto que guarda o estado do componente
      name: '',
      time: '00:00',
    };

    saveTask(event: React.FormEvent<HTMLFormElement>) { // função que salva a tarefa no state do componente Form e recebe um evento do tipo React.FormEvent E um HTMLFormElement (que é o tipo do elemento que está sendo passado no evento)
      event.preventDefault(); // previne o comportamento padrão do form que é recarregar a página
      this.props.setTasks(taskOld => 
      [
          ...taskOld,
          {
            ...this.state,
            id: uuidv4(),
            completed: false,
            selected: false,
          }
        ]
      );
      // this.props.setTasks( // this.props é um objeto que guarda todas as props que o componente recebe
      // setTasks é a função que altera o estado (useState)  em um array de tarefas (ITask)
      this.setState({ 
        name: '', 
        time: '' 
      }); // seta o valor de task e time no state, neste caso o valor é uma string vazia pq queremos limpar o input
    };
    render() {
      return ( //  return (  return é o que vai ser renderizado na tela
      <form className={form.novaTarefa} onSubmit={this.saveTask.bind(this)}>
        <div className={form.inputContainer}>
          <label htmlFor="task">Add new class:</label>
          <input
          // input pode ser controlado ou não controlado, com o state ou sem o state
            type="text"
            name="task"
            value={this.state.name} // vai la no state e pega o valor de task
            onChange={event => this.setState({ ...this.state, name: event.target.value })}
            // onChange é um evento que é disparado quando o valor do input muda
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
            value={this.state.time} // vai la no state e pega o valor de time
            onChange={(event) => { // onChange é um evento que é disparado quando o valor do input muda
              this.setState({ time: event.target.value }); // seta o valor de time no state, e o setState é uma função default do react, e event.target.value é o valor do input pego pelo evento do onChange pelo DOM
            }}
            id="time"
            min="00:00:00"
            max="23:59:59"
            required
          />
        </div>
        <Button type="submit"> 
          Adicionar
        </Button>
      </form>
    );
  }
}

export default Form;
