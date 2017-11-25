const Koa = require('koa');
const cors = require('@koa/cors');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/store', {
  useMongoClient: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database connection');
});

// const index = require('./server/routes/index');
// const users = require('./server/routes/users');
// const api = require('./server/routes/api/index');
// router.use('/', index.routes());
// router.use('/users', users.routes());
// router.use('/api/v1', api.routes());

const app = new Koa();
const router = new Router();

app.use(bodyParser());
app.use(logger());
app.use(cors());
// app.use(router.routes());

app.on('error', (err, ctx) => {
  logger('Server error', err, ctx);
});

app.listen(3000, () => {
  console.log('Server is running in port 3000');
});
