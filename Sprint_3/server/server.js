const express = require('express');
const app = express();
const cors = require('cors');
const sPort = 8080;
const videosRoutes = require('./routes/videos');


app.use(cors());

app.use((req, res, next) => {
    console.log("request: ", req.path, Date.now());
    next();
})

app.use(express.json());

app.use('/', videosRoutes);

app.use(express.static('public'));

app.listen(sPort, () => {
    console.log('Server is running on port ' + sPort);
})