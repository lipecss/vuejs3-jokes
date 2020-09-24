## Sobre

Simples v-for list pegandos dados da API Daddy jokes, utilizando o novo Vuejs 3 e sua API de composição.

## Como foi desenvolvido?

Estava um dia chuvoso, frio e muito cansativo. Estava eu em meu sofá, macio e com muita vontade de codar. Foi aí que descidi pegar meu celular e verificar como seria desenvolver e publicar um simples site tudo através desse poderoso celular. 

### Ferramentas utilizadas
| Nome | Descrição |
|--|--|
| Spck Editor | Um poderoso editor com snippets, corretor e muito mais. Me senti tilizando meu queridinho VsCode ♥️ |
| Termux | Um Linux no bolso que pode ser personalizado e fazer tudo que precisamos|

## O que é API de composição

Essa é uma grande novidade na nova versão do **Vuejs**. Ela proporciona aos usuários mais flexibilidade ao organizar o código de componentes. Em vez de ser forçado a sempre organizar código por opções, o código agora pode ser organizado como funções cada um lidando com um recurso específico. As APIs também tornam mais simples extrair e reutilizar a lógica entre componentes, ou mesmo componentes externos.


Ferramentas aprendidas e utilizadas:

#### Estados reativos e efeitos colaterais

```javascript
import { reactive } from 'vue' //reactive state 
const state = reactive({ count: 0 })
```

#### Ref

```javascript
const count = ref(0) 
console.log(count.value) // 0 
count.value++ 
console.log(count.value) // 1
```
## Deploy
Para fazer o deploy, utilizei o [surge](https://surge.sh) em conjunto do terminal (Termux). E em menos de 5 minutos a aplicação estava no ar! 🚀

![terminal](https://i.imgur.com/eh2QC54_d.webp?maxwidth=640&shape=thumb&fidelity=medium)

[Site do projeto](http://vuejs3-jokes.surge.sh)

### Resultado
![example](https://thumbs.gfycat.com/TepidBriskJabiru-size_restricted.gif)
