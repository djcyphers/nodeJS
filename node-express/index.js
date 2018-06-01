const 
    express = require('express'), 
    http = require('http'), 
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    dishRouter = require('./routes/dishRouter'),
    leaderRouter = require('./routes/leaderRouter'),
    promoRouter = require('./routes/promoRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/dishes', dishRouter);
app.use('/leaders', leaderRouter);
app.use('/promotions', promoRouter);

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
});