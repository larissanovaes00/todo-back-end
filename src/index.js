// para deixar minha api online
const express = require ('express');
const server = express();

// para a api entender que estou mandando/recebendo informações em formato json
server.use(express.json());

const TaskRoutes = require('./routes/TaskRoutes');

server.use('/task', TaskRoutes);

server.listen(3000, () => {
  console.log('api online');
});