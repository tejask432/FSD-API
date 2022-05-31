const express = require('express');
const port = 8000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
const router = express.Router();
const routes = require('./routes/routes');
routes(router);
app.use(router);
//
app.listen(port, function(){
	console.log("Listening " + port);
});

