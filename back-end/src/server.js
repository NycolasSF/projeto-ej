const app = require('./app');

const DOOR = 3333;

app.listen(DOOR, () => {
  console.log(`Servidor Rodando na porta ${DOOR}`);
});
