# React

## Componentização

Nome do Componente
O nome do componente deverá começar com letra maiúscula, mas por que?

Existe uma possibilidade no html de criar web-components, que nos permite criar tags html totalmente customizadas. Entre essas customizações, podemos customizar o nome da tag!

Para o React diferenciar um componente de um web-component, ele pede para que criemos um componente com a primeira letra maiúscula, assim ele consegue diferenciar por exemplo que <meuBotao /> é um web-component e <MeuBotao /> é um componente!

## JSX

Para podermos criar um componente, fora a regra que citamos acima, precisamos retornar JSX, e o que seria isso exatamente?

O JSX é uma forma de "escrever HTML no JS", que é a forma que explicamos, mas não é exatamente isso.

O JSX não transforma o componente <Botao /> em HTML diretamente, antes disso, ele é transformado em uma elemento React, e aquele código é transformado em algo assim:

const Botao = React.createElement('button', {}, 'Botão');
Sem se atentar ao que isso faz agora, mas por debaixo dos panos o React transforma aquela sintaxe """HTML""" nesse palavrão que, na hora do ReactDOM.render, é transformado em DOM e, aí sim, transformado em HTML.

Você percebeu que a tag html é usada como primeiro parâmetro da função createElement como uma string?

Isso mostra que, para criarmos um componente, precisamos de uma tag "pai", logo, o código a seguir não funcionará:

class Botao extends React.Component {
  render() {
   return (
      <p> Título do Botão </p>
      <button>
        Botão
      </button>
    )
 }
}
Caso você precise fazer isso, leia sobre React.Fragment.


## class Components
React.Component e render
Para criarmos um componente com class components, precisamos estender à classe React.Component. Nesta classe, existe apenas uma função obrigatória chamada render e, dentro dela, nós retornamos o JSX que precisamos para criar o componente!


## curiosidade

 pacote chamado RxJS que é uma referência em reatividade com Javascript

 ## React

 Funciona de escopo de cima para baixo - unidirecional (ja foi resolvido esse problema)
 Para acesso a escopo globais a props é uma das soluções

 O React utiliza os estados para atualizar os componentes;

- Aprendemos como o React guarda informações que serão importantes para uma possível nova renderização de um componente.
- Criar estados com function components e class components;
- Criamos estados tanto com function components quanto com class components, entendendo como se cria esses estados em cada tipo.
- Controlar campos de um Formulário com estados;
- Aprendemos a diferença de um formulário/input controlado e não controlado, e como podemos controlá-los para pegar/mudar seus campos como quisermos.
- Criar interfaces e reutilizá-las;
- Vimos como o Typescript nos dá uma forma de criar interfaces para podermos descrever tipos mais complexos, como os props dos componentes.
- Utilizar props e para informar uma mudança de estado;
- Utilizamos a junção de props + state para podermos passar state para outros componentes e para podermos avisar que um estado deve ser mudado.