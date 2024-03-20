# Todo List com React e typescript

## Como rodar o projeto

1 - Ter node instalado
2 - clonar repositrorio
3 - abra o terminal no seu Vscode
4 - digite os seguintes comandos:
npm i (para instalar as dependencias do projeto)
npm run dev (para abrir o projeto no seu localhost)

##

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```
