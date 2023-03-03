const express = require('express');
const cors = require('cors');
const { router } = require("./routes");
const { favsRouter } = require('./routes/favsRouter');
const server = express();
const PORT = 3001;

server.use(express.json());
server.use(cors());
server.use("/rickandmorty", router);
server.use("/favs", favsRouter);

server.listen(PORT, () => {
    console.log('Server raised in port ' + PORT);
});