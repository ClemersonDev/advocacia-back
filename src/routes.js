const express = require('express');
const routes = express.Router();
const ClientsController = require('./controllers/ClientController');
const EmailController = require('./controllers/EmailController');

routes.get('/clients', ClientsController.index);
routes.post('/clients', ClientsController.create);
routes.post('/emails', EmailController.enviaMail);

module.exports = routes;