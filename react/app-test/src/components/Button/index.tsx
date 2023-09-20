import React from 'react';
import botao from './botao.module.scss';

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  children?: React.ReactNode;
  onClick?: () => void;
}

function Button({onClick, type, children}: ButtonProps) {
  return (
    <button className={botao.botao} onClick={onClick} type={type}> 
      {children}
    </button> 
  );
}

export default Button;