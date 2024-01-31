```markdown
# Google Meet Clone

Este é um projeto de clone do Google Meet, desenvolvido com as seguintes tecnologias:

- ReactJS
- React Hooks
- React Router Dom
- Redux
- Redux Thunk
- Redux DevTools
- React Styled Components
- Firebase / Firestore
- React Firebase Hooks

## Configuração Firebase

Antes de iniciar o projeto, é necessário configurar o Firebase. No arquivo `src/firebaseConfig.js`, insira suas credenciais do Firebase da seguinte forma:

```javascript
// src/firebaseConfig.js

const firebaseConfig = {
  apiKey: 'SUA_CHAVE_API',
  authDomain: 'seu-projeto.firebaseapp.com',
  projectId: 'seu-projeto',
  storageBucket: 'seu-projeto.appspot.com',
  messagingSenderId: 'SEU_ID_DE_MENSAGEM',
  appId: 'SEU_APP_ID',
  measurementId: 'SUA_MEDICAO_ID',
};

export default firebaseConfig;
```

## Comandos

Certifique-se de ter o Yarn instalado. Se não estiver instalado, você pode instalá-lo executando o seguinte comando:

```bash
npm install -g yarn
```

Depois, no diretório do projeto, você pode executar os seguintes comandos:

### Instalação de Dependências

```bash
yarn install
```

### Executar o Projeto

```bash
yarn start
```

O aplicativo será aberto no modo de desenvolvimento em [http://localhost:3000](http://localhost:3000).

### Build do Projeto

```bash
yarn build
```

Isso cria a versão de produção do aplicativo na pasta `build`.

## Contribuições

Sinta-se à vontade para contribuir com melhorias ou correções de bugs. Abra um pull request e ficaremos felizes em analisá-lo.

## Licença

Este projeto é licenciado sob a [MIT License](LICENSE).
```

Lembre-se de substituir os espaços reservados no código pelos valores reais do seu projeto. Este README é apenas um ponto de partida e você pode personalizá-lo conforme necessário para o seu projeto específico.
