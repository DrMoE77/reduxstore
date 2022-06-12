{
    "name": "mern-shopping",
    "version": "1.0.0",
    "description": "redux store",
    "main": "server/server.js",
    "scripts": {
      "start": "node server/server.js",
      "develop": "concurrently \"cd server && npm run watch\" \"cd client && npm start\"",
      "install": "cd server && npm i && cd ../client && npm i",
      "seed": "cd server && npm run seed",
      "build": "cd client && npm run build"
    },