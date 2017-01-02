var express = require('express');
var router = express.Router();

var demoController = require('../controllers/demoController.js');
var albumController = require('../controllers/albumController.js');
var todoController = require('../controllers/todoController.js');

router.get('/', function(req, res, next){
    res.end('Responding to general API request');
});

router.get('/demo', demoController.list);

router.get('/demo/:id', demoController.show);

router.post('/demo', demoController.create);

router.put('/demo/:id', demoController.update);

router.delete('/demo/:id', demoController.remove);

/* Route to Albums controller, to be added after the demo.Controller code */

router.get('/albums', albumController.list);

router.get('/albums/:id', albumController.show);

router.post('/albums', albumController.create);

router.put('/albums/:id', albumController.update);

router.delete('/albums/:id', albumController.remove);

/* Route to Todos controller, to be added after the album.Controller code */

router.get('/todos', todoController.list);

router.get('/todos/:id', todoController.show);

router.post('/todos', todoController.create);

router.put('/todos/:id', todoController.update);

router.delete('/todos/:id', todoController.remove);

module.exports = router;