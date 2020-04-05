<h1 align="center">
    <img alt="NodeJS" src="https://github.com/bivarz/NodeJs-Application/blob/master/node-js-png-6.png" width="200px" /> 
    <img alt="GoStack" src="https://camo.githubusercontent.com/8c13dc2618dbd7f76d1d574350b98fdee1335ce5/68747470733a2f2f726f636b6574736561742d63646e2e73332d73612d656173742d312e616d617a6f6e6177732e636f6d2f626f6f7463616d702d6865616465722e706e67" width="200px" data-canonical-src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" style="max-width:100%">
</h1>
<h3 align="center">
  :dart: 1 Challenge: NodeJS | Express | GET,POST,PUT & DELETE
</h3>

## :rocket: The Challenge

Create an application to store projects and their tasks from scratch using Node.js with Express

### Routes

- <b>POST /projects:</b> The route must receive id and title within the body and register a new project within an array in the following format: {id: "1", title: 'New project', tasks: []}; Make sure to send both the project ID and the title in string format with double quotes.

- <b>GET /projects:</b> Route that lists all projects and their tasks;

- <b>PUT /projects/:id :</b> The route must change only the title of the project with the id present in the parameters of the route;

- <b>DELETE /projects/:id :</b> The route must delete the project with the id present in the route parameters;

- <b>POST /projects/:id/tasks:</b> The route must receive a title field and store a new task in the task array of a specific project chosen through the id present in the route parameters;


### Middlewares

- Create middleware that will be used on all routes that receive the project ID at the URL parameters and verify that the project with that ID exists. If it doesn't exist, return an error, otherwise allow the request to continue normally;

- Create a global middleware called on every request that prints (console.log) a count of how many requests have been made in the application so far;

<h3>#Rocketseat #GoStack</h3>
