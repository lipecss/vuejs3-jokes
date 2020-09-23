## Sobre

Simples v-for list pegandos dados da API Daddy jokes, utilizando o novo Vuejs 3 e sua API de composição.

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

## Resultado
![example](https://thumbs.gfycat.com/TepidBriskJabiru-size_restricted.gif)
