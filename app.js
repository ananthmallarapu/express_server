const express = require('express');
const path = require('path');

function createApp() {
  const app = express();
  return app;
}

function setupStaticRoutes(app) {
  app.use(express.static(path.resolve(__dirname, '../', 'GoPlaces/dist')));
  return app;
}

function setupMiddlewares(app) {

  const bodyParser = require('body-parser');
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: false
  }));

  return app;
}


function setupRestRoutes(app) {
  app.use('/', require(path.join(__dirname, './moduleOne')));

  app.use(function(req, res, next) {
    const err = new Error('Resource not found');
    err.status = 404;
    return res.status(err.status).json({
      "error": err.message
    });
  });

  app.use(function(err, req, res, next) {
    console.log("Internal error in watch processor: ", err);
    return res.status(err.status || 500).json({
      "error": err.message
    });
  });

  return app;
}

  let app = createApp();

  app = setupStaticRoutes(app);

  app = setupMiddlewares(app);

  app = setupRestRoutes(app);


  app.listen(3000,() =>{
    console.log("server running on port 3000");
  });