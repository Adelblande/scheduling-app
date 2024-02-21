# Scheduling App

O projeto Scheduling App foi baseado em um desafio.

Atividades

- Construir uma tela de agendamento para lavagem automotiva
  - Campos: Placa, Data, Horário e Tipo de Lavagem (Simples ou Completa)
  - Validar placa mercosul (formato ABC1D34)
  - A agenda de lavagens será aberta somente de segunda à sexta das 10h às 18h, com uma pausa do 12h às 13h.
  - Lavagem Simples com duração de 30 minutos
  - Lavagem Completa com duração de 45 minutos
  - Não permitir agendamentos no mesmo horário
- Construir uma tela de listagem dos agendamentos
  - Exibir os campos: Placa, Data, Horário e Tipo de Lavagem
  - Exibir agendamentos com data mais próxima primeiro
  - Implementar botão para cancelar agendamento, com modal de confirmação
  - Implementar botão para concluir agendamento, com modal para confirmação

### Clonando e rodando o projeto

Se vc tiver docker e docker-compose instalado em sua maquina, pode clonar o backend
e roda-lo executando os comandos abaixo senão clone só o frontend e rode a fake api

```bash

# Se ainda não clonou o scheduling-api
$ git clone https://github.com/Adelblande/scheduling-api.git

# Navegue para dentro da pasta scheduling-api
$ cd scheduling-api

# Instale as dependencias
$ npm install

# Rode o comando para subir os containers
$ docker-compose up -d

# Acesse o container da API com o comando abaixo
$ docker exec -it schedules-api bash

# Dentro do container rode o comando para iniciar a API
$ npm run start:dev

```

Você pode rodar no dispositivo fisico ou emulador, eu uso emulador (Android Studio)
Para rodar no dispositivo fisico, precisa instala o Expo Go no celular e apontar para o QR code que aparece no terminal depois de rodar os comandos abaixo, se estiver no emulador o Expo Go será instalado automaticamente e o projeto scheduling-app aparecerá na tela.

```bash

# Se ainda não clonou o scheduling-app
$ git clone https://github.com/Adelblande/scheduling-app.git

# Navegue para dentro da pasta scheduling-app
$ cd scheduling-app

# Instale as dependencias
$ npm install

# Rode o comando para iniciar o fake da api
$ npx json-server --watch server.json -p 3333

# Rode o comando para iniciar o scheduling-app
$ npx expo start

```

## 🛠️ Desenvolvido com as tecnologias

- [React-Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [Typescript](https://www.typescriptlang.org/)
- [Zod](https://zod.dev/)
- [Zustand](https://zustand-demo.pmnd.rs/)

<p>
 <img alt="tela-de-agendamento" src="https://github.com/Adelblande/scheduling-app/blob/main/images/tela-de-agendamento.png" width="200px">

 <img alt="cadastro-de-agendamento" src="https://github.com/Adelblande/scheduling-app/blob/main/images/cadastro-de-agendamento.png" width="200px">

 <img alt="sem-agendamento" src="https://github.com/Adelblande/scheduling-app/blob/main/images/sem-agendamento.png" width="200px">

 <img alt="validações" src="https://github.com/Adelblande/scheduling-app/blob/main/images/validacoes.png" width="200px">

 <img alt="confirme-cancelamento" src="https://github.com/Adelblande/scheduling-app/blob/main/images/confirme-cancelamento.png" width="200px">

 <img alt="confirme-concluir" src="https://github.com/Adelblande/scheduling-app/blob/main/images/confirme-concluir.png" width="200px">

 <img alt="calendário" src="https://github.com/Adelblande/scheduling-app/blob/main/images/calendario.png" width="200px">

 <img alt="agendamento-almoço" src="https://github.com/Adelblande/scheduling-app/blob/main/images/agendamento-almoco.png" width="200px">

 <img alt="agendamento-fora-horario" src="https://github.com/Adelblande/scheduling-app/blob/main/images/agendamento-fora-horario.png" width="200px">

 <img alt="agendamento-fora-horario" src="https://github.com/Adelblande/scheduling-app/blob/main/images/agendamento-fora-horario.png" width="200px">

 <img alt="veiculo-agendado" src="https://github.com/Adelblande/scheduling-app/blob/main/images/veiculo-agendado.png" width="200px">
</p>
