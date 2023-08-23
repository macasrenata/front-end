import React from 'react';
import botao from './botao.module.scss';

class Button extends React.Component {
  render() {
    return (
      <button className={botao.botao}>Click Me</button>
    );
  }
}

export default Button;