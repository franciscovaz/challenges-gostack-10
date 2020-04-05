const express = require('express');
const server = express();

server.use(express.json()); // Body requer json


const projectsAndTasks = [
  {
    "id": "1",
    "title": "Desafio 1.0 GoStack",
    "tasks": ["Tarefa 1.0 do desafio 1"]
  },
  {
    "id": "2",
    "title": "Desafio 1.1 GoStack",
    "tasks": ["Tarefa 1.0 do desafio 1.1", "Tarefa 2 do desafio 1.1"]
  }
];

var count = 0;

// MIDDLEWARE - Check if project with ID exists
function checkIfProjectIdExists(req, res, next){
  const { id }= req.params;

  const haveProject = projectsAndTasks.find( objsArray => objsArray.id == id);

  if(!haveProject){
    return res.status(400).json({ error: `Project doesn't exists!`});
  }
    return next();
};


server.use((req, res, next) =>{
  console.log('Count: ', count);
  count++;
  // Better solution
  // console.count('Número de requisições');
  next();
});


// GET all projects
server.get('/projects', (req, res) =>{
  return res.json(projectsAndTasks);
})

// GET project by ID
server.get('/projects/:id', checkIfProjectIdExists, (req, res) => {
  const idProject = req.params.id;
  // Procura obj com id = ao recebido nos params
  const projectToSend = projectsAndTasks.find( obj => {
    return obj.id === idProject;
  });
  return res.json(projectToSend);
});

// Add new project
server.post('/projects', (req, res) => {
  const { id, title } = req.body;

  const newProject = {
    id,
    title,
    tasks: []
  }

  projectsAndTasks.push(newProject);

  return res.json(projectsAndTasks);
});

// Change title of project X
server.put('/projects/:id', checkIfProjectIdExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const newProject = projectsAndTasks.find(proj => proj.id == id);

  newProject.title = title;

  return res.json(projectsAndTasks);
});

// DELETE project with ID X
server.delete('/projects/:id', checkIfProjectIdExists, (req, res) => {
  const { id } = req.params;


  const projIndex = projectsAndTasks.findIndex(proj => proj.id == id);

  // remove object
  projectsAndTasks.splice(projIndex, 1);
  

  return res.send(`Projeto com o id: ${id}, eliminado com sucesso!`);
  
});

// ADD new task to project
server.post('/projects/:id/tasks', checkIfProjectIdExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projectsAndTasks.find(proj => proj.id == id);

  project.tasks.push(title);

  return res.json(projectsAndTasks);
});

server.listen(3000);