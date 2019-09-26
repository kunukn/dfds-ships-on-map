const express = require('express');
const next = require('next');
const https = require('https');
const fs = require('fs');
const argv = require('minimist')(process.argv.slice(2));

const nextEnv = process.env.NODE_ENV !== 'production';
const app = next({ dev: nextEnv });
const handle = app.getRequestHandler();
const httpsPort = argv.port || 4000;

process.env.NODE_ENV = argv.dev || 'development';

console.log(process.env.NODE_ENV);

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.post('*', (req, res) => {
      return handle(req, res);
    });

    let httpServer;

    const privateKey = fs.readFileSync('./certificates/localhost+2-key.pem');
    const certificate = fs.readFileSync('./certificates/localhost+2.pem');
    const credentials = { key: privateKey, cert: certificate };
    httpServer = https.createServer(credentials, server);
    httpServer.listen(httpsPort, err => {
      if (err) throw err;
      console.log(`> https ready on -> https://localhost:${httpsPort}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
