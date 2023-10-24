# Imutabilidade e useState() - Exercício

Caso não lembre como funciona o processo de entrega, clique [**aqui**](https://github.com/labenuexercicios/instrucoes-entrega)


## Como eu vou executar os exercícios?
Para o exercício de hoje, vamos utilizar um template! Dentro desse template vocês vão encontrar uma estrutura para trabalharmos com Pokemons! :) 


Para executar este exercício, você pode criar uma nova aplicação React, utilizar o **CodeSandbox** ou usar este template do repositório.
- Caso use este template, lembre-se de dar um `npm install` assim que baixar! 
- Caso estiver usando o codeSandBox, pode usar esse template aqui: https://codesandbox.io/s/imutabilidade-e-usestate-exercicio-rdgs0y

Caso queira criar uma nova aplicação React, basta copiar os conteúdos deste repositório e colar dentro da pasta do seu projeto criado.

# **Observação: A aplicação não vai funcionar até você finalizar o exercício 2!**

# Exercício 1

Primeiro, vamos analisar todo o código que vocês estão recebendo. 

- Observe o `App.js`, o que você consegue visualizar que já conhece? 
- Entende o `<GlobalStyles/>`?
- Analize os valores que são esperados por `props` no componente PokemonCard criado, que tipo de dado está sendo esperado neste componente?

- Agora analize o `JSX`, quais componentes existem nesta aplicação?
- O que existe dentro do componente `PokemonCard`?
- O que a função `evoluirPokemon` está fazendo no momento?
- Quais informações estão sendo recebidas pelo componente PokemonCard via props?

Look at `App.js`, what can you see that you already know?
- Do you understand `<GlobalStyles/>`?
- Analyze the values that are expected by `props` in the created PokemonCard component, what type of data is being expected in this component?

- Now analyze `JSX`, what components are there in this application?
- What is inside the `PokemonCard` component?
- What is the `evolvePokemon` function doing at the moment?
- What information is being received by the PokemonCard component via props?

# Exercício 2

Agora é hora de criar seus próprios cards, para recolher as informações dos pokemons, você pode usar o site https://bulbapedia.bulbagarden.net/wiki/Main_Page como referência! 

Seu trabalho nesse momento é criar o estado do pokémon e passar as Props corretamente do componente `App.js` para dentro do componente `PokemonCard`. Verifique se todas elas estão funcionando.

Você vai perceber que é necessário passar uma cor para os styled-components. Você não precisa entender 100% como isso funciona agora, mas se você passar as props corretamente, vai dar certo! :) 

Now it's time to create your own cards, to collect pokemon information, you can use the website https://bulbapedia.bulbagarden.net/wiki/Main_Page as a reference!

Your job at this point is to create the pokemon's state and pass the Props correctly from the `App.js` component into the `PokemonCard` component. Check that they are all working.

You will notice that it is necessary to pass a color to the styled-components. You don't need to understand 100% how this works now, but if you pass the props correctly, it will work! :)

# Exercício 3
 Implemente a função de evoluir o Pokemon. Nessa função de onClick, você precisa modificar o estado criado no App.js para que, ao clicar, o Pokemon evolua pra sua próxima forma, se isso for possível.
Perceba que alguns pokemons evoluem e outros não.
Para isso, você precisa modificar os dados de dentro do objeto salvo no useState. Através de um spread operator, modifique apenas os dados necessários para que o pokemon evolua: 

- Cor
- Imagem
- Nome
- Tipo
- Evoluido (perceba que isso é um boolean, se ele já estiver evoluído, deve ser true; caso contrário, false.)
- Peso

Depois disso, crie novos cards com pokemons diferentes para praticar :) 

Implement the function of evolving Pokemon. In this onClick function, you need to modify the state created in App.js so that, when clicked, the Pokemon evolves into its next form, if that is possible.
Realize that some pokemons evolve and others don't.
To do this, you need to modify the data inside the object saved in useState. Using a spread operator, modify only the data necessary for the pokemon to evolve:

- Color
- Image
- Name
- Type
- Evolved (note that this is a boolean, if it is already evolved it must be true; otherwise, false.)
- Weight

After that, create new cards with different pokemons to practice :)