const express = require('express');

const server = express(); // chamar a função do express

// como body da requisição, só queremos JSOM, logo dizemos ao express para só ler JSON
server.use(express.json()); // express pretende receber JSON no body


// Query params = ?teste=1
// Route params = /users/1
// Request body = { "name": "Francisco", "email": "vaz@mail.com"}

// CRUD

const users = ['Francisco', 'Diego', 'Seat'];

// É chamado sempre, independentemente da rota!!!!
// MIDDLEWARE global
server.use((req, res, next) =>{
  console.time('Request'); // Para calcular o tempo de uma requisição;
  console.log(`Método: ${req.method}; URL: ${req.url}`);

  next();

  console.timeEnd('Request');
})

// MIDDLEWARE local
// verifica se vem o nome no pedido
function checkUserExists(req, res, next) {
  if(!req.body.name)
  return res.status(400).json({ error : 'Username is required' });

  return next();
}

// MIDDLEWARE que verifica se o index retorna um index de um utilizador
function checkUserInArray(req, res, next){
  const user = users[req.params.index];
  if(!user){
    return res.status(400).json({ error : 'User does not exists' });
  }

  // crio uma nova var dentro da requisição com a info do user
  req.user = user;

  return next();
}

server.get('/users', (req, res) => {
  return res.json(users);
})

server.get('/users/:index', checkUserInArray, (req, res) => {
  // const nome = req.query.nome;
  // const id = req.params.id; // better way, next line
  // const { index } = req.params; // ES6

  return res.json(req.user);
})

server.post('/users', checkUserExists, (req, res) =>{
  const { name } = req.body;

  users.push(name);

  return res.json(users);
})

server.put('/users/:index',checkUserExists, checkUserInArray, (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  users[index] = name;

  return res.json(users);
});

server.delete('/users/:index', checkUserInArray, (req, res) => {
  const { index } = req.params;

  users.splice(index, 1); // chega ao index e elimina X posições apartir dai (neste caso 1)

  return res.send('Eliminado com sucesso!');

})

server.listen(3000);
