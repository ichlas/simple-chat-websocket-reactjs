# Simple chat (realtime) with reactjs and websocket

![test](https://img.shields.io/npm/dt/vue-scroll-datepicker-cashbac.svg?style=flat-square)
![test](https://img.shields.io/npm/v/vue-scroll-datepicker-cashbac/latest.svg?style=flat-square)
![test](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)

In this article we will create a simple chat using websocket, nodeJs and ReactJs.
From there you can play around and explore and add your own ideas and features.

## Demo

See demo [here](https://miichlas.online/demo/simple-chat-websocket-reactjs)

![simple-chat-websocket-reactjs](https://res.cloudinary.com/daihatsu/image/upload/v1617036520/support/ogrslxcf60whgxbhvcxr.gif)


### Backend (Nodejs):
Create a simple WebSocket server that broadcasts all incoming messages to everyone that’s connected. Then we will also need the actual
> server.js
file. Which is merely the following:

```bash
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3030 });
wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(data) {
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  });
});
```
### Frondend (ReactJs):

## Development

```bash
# install dependencies
$ git clone https://github.com/ichlas/simple-chat-websocket-reactjs.git

# serve with hot reload at localhost:3000
$ yarn start_client

# build for production and launch server
$ yarn start_server

# generate static project
$ yarn generate
```
