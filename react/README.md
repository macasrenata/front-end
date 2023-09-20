# React

## Componentização

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

```
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
```
Caso você precise fazer isso, leia sobre React.Fragment.


## Class Components
React.Component e render
Para criarmos um componente com class components, precisamos estender à classe React.Component. Nesta classe, existe apenas uma função obrigatória chamada render e, dentro dela, nós retornamos o JSX que precisamos para criar o componente!


## Curiosidades

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


## Functions JS/TS

As funções: map, spread operator, ternariese destructuring.

- map

O map é um método MUITO importante, pois como no React existe essa combinação grandiosa entre reaproveitamento de código e renderização dinâmica, o map é o método perfeito para isso, pois você consegue iterar sobre todos os itens e retornar alguma coisa no mesmo index que está sendo iterado no laço atual, ou seja:

```
const tecnologias = ['React', 'Typescript', 'Javascript'];
```

Se você faz isso daqui:

```
const tecnologiasComJSX = tecnologias.map(tecnologia => <li> {tecnologia} </li>)
```

Nesse caso, a variável tecnologiasComJSX será 

```
[<li> React </li>, <li> Typescript </li>, <li> Javascript </li>]
```

Com isso transformamos todos os itens deste array em JSX!! Essa é a magia map!!

- Spread Operator

O Spread Operator é muito importante para fazer atualizações em estados, pois quando queremos atualizar estados, é comum termos parte do estado que não será alterado, veja esse caso:

```
let curso = {
  instrutor: "Luiz Fernando",
 curso: "React com Typescript"
}
Caso queiramos adicionar o ano em que o curso foi lançado, podemos fazer isso:

curso = {
  …curso,
  ano: 2021
}
Esse ...curso dentro das chaves significa que dentro daquele novo objeto que está sendo criado terá tudo que curso tinha e o ano que faltava, ficando assim:

{
  instrutor: "Luiz Fernando",
  curso: "React com Typescript",
  ano: 2021
}
```


- ternaries

Ternários são bem importantes para a parte renderização condicional do React, pois ele permite que consigamos renderizar JSX de forma condicional, adicionar classes de forma condicional, mudar estados de forma condicional, entre outros.

Exemplo de ternário em JSX

```
return (
  <>
    {condicao ?
      <p> Atende a condição </p>
    :
      <p> Não atende a condição </p>
    }
  </>
)
```

Nesse caso dou uma menção honrosa ao operador &&, que nos permite renderizar de forma condicional também, mas sem a necessidade do :, ou seja, de um else:

```
return (
  <>
    {condicao &&
      <p> Esse JSX só vai renderizar se a condição for verdadeira </p>
    }
  </>
)
```

Exemplo de ternário em classes CSS

```
return (
 <button className={condicional ? "classe-com-condicional" : "classe-sem-condicional"}>
    Meu botão
  </button>
)
```

Exemplo de ternário em mudança de estado

```
const [curso, setCurso] = useState({ nome: "React com Typescript", completado: false });
…
setCurso({
  nome: "React com Typescript",
  completado: false,
  completado: condicao ? true : false
})
```


- destructuring

Para finalizar, o destructuring é muito útil para podermos aproveitar estados anteriores e mudarmos alguma coisa, vamos escrever o exemplo acima:

```
const [curso, setCurso] = useState({ nome: "React com Typescript", completado: false });
…
setCurso({
  …curso,
 completado: condicao ? true : false
})
```

### Ciclo de vida de um componente


Um componente, assim como o ser humano, tem um ciclo de vida! No caso do componente, ele nasce, compartilha informação e morre!

Mas como assim ele morre???

Nossa aplicação não tem múltiplas telas ou renderização condicional de componentes, por isso não conseguimos ver um componente morrendo em si, mas o termo "morrer" é mais conhecido como unmount, ou "desmontar" em português, assim como "nascer" seria mount, que é "montar" em português, o que faz muito mais sentido para um componente né?

Em geral um componente tem um ciclo de vida assim:

componentWillMount (antes de ser montado)
componentDidMount (acabou de ser montado)
componentWillUpdate (componente vai ser atualizado)
componentWillUnmount (componente vai ser desmontado)
Esses palavrões que eu coloquei acima e não foram à toa, são métodos que podem ser utilizados em class components assim como o método render que utilizamos para renderizar o JSX.

Claro que esses não são os únicos métodos, mas são os mais importantes para que consigamos entender o ciclo de vida de forma didática, caso queira saber mais, acesse a documentação sobre React.Component.

Tá, beleza Luiz, você está me falando sobre class components, mas não estamos trabalhando com hooks??? cadê o ciclo de vida com function components???

Vamos ver então essas funções acima escritos com function components:

componentWillMount
 useLayoutEffect(() => {
    …
  },[])COPIAR CÓDIGO
Começamos com um bem pouco utilizado, o hook useLayoutEffect, ele com o array vazio atua como o componentWillMount. É usado quando você precisa mudar algo visualmente antes do componente aparecer, para que não haja aquele problema da tela piscar assim que a tela carrega, um bom exemplo disso atualmente é a mudança de temas para light/dark.

componentDidMount
 useEffect(() => {
    …
  }, [])COPIAR CÓDIGO
O useEffect com o array de dependências vazio atua como ocomponentDidMount, diferente do useLayoutEffect, ele executa assim que o componente é renderizado, normalmente é utilizado para fazer chamadas para o servidor ou fazer algum cálculo com props passados.

componentWillUpdate
 useEffect(() => {
    …
  }, [variavel])COPIAR CÓDIGO
O componentWillUpdate pode ser feito tanto pelo useLayoutEffect quanto pelo useEffect, desde que tenha uma variável no array de dependências e, à partir da primeira execução, os 2 atuarão como componentWillUpdate, sempre executando quando essa variável mudar.

componentWillUnmount
useEffect(() => {
  return () => {
    …
  }
},[])COPIAR CÓDIGO
Diferente do que muitas pessoas pensam, também existe a representação do componentWillUnmount em hooks, que é retornar uma função dentro do useEffect! dessa forma essa função dentro do return só será executada quando o componente estiver desmontando. É bastante usado para clearTimeout, clearInterval ou para enviar informações de acesso daquele componente para outro lugar.

Agora que você já sabe sobre ciclo de vida, podemos continuar a utilizar o useEffect sem medo. Vamos lá? ;)



## ciclo de vida

Funciona o ciclo de vida de um componente;
Entendemos como o ciclo de vida de um componente funciona, desde o seu nascimento até a sua morte.
Utilizar o useEffect;
Utilizamos o useEffect para resolver um problema que tivemos e vimos como esse hook é importante no ecossistema React.
Desestruturar strings;
Aprendemos que podemos desestruturar strings e que podemos colocar a opção downLevelIteration para que possamos fazer essa desestruturação.
Utilizar função recursiva;
Criamos uma função recursiva para resolver o problema da contagem regressiva.
Refatorar um class component para um function component;
Aprendemos como refatorar um class component para function component.