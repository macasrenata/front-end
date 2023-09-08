import React from 'react';
import botao from './botao.module.scss';

class Button extends React.Component <{type?: "button" | "submit" | "reset" | undefined, children: string}>{ // declara o tipo de props que o componente vai receber / prop é sempre um objeto { funções dentro do objeto}
  render() { // funcao que renderiza o componente
    const { type = "button" } = this.props; // desestruturação de props
    return (
      <button type={type} className={botao.botao}> 
        {this.props.children}
      </button> 
    ); // props.text é o texto que vai ser passado para o componente
  }
}

export default Button;