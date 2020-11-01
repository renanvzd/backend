const { response } = require('express');
const express = require('express');
const { uuid } = require('uuidv4');

const app = express();

app.use(express.json());

const projects = [];        
//não utilizar em produção pq é uma variável que armazena apenas na memória da aplicação enquanto está rodando.

app.get('/projects', (request, response) => {
    // const { title, owner } = request.query;

    //  console.log(title);
    //  console.log(owner);

    return response.json(projects);
});

app.post('/projects', (request, response) => {
    const { title, owner } = request.body;

    const project = { id: uuid(), title, owner };
    
    projects.push(project);

    return response.json(project);
});

app.put('/projects/:id', (request, response) => {
    const { id } = request.params;
    
    console.log(id);

    return response.json([
        'Projeto 4',
        'Projeto 2',
        'Projeto 3',
    ]);
});

app.delete('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 2',
        'Projeto 3',
    ]);
}); 

app.listen(3333, () => {
    console.log('🚀 Back-end started!');
});