var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

// ACA SE AGREGAN LAS RUTAS PARA LAS PAGINAS DEL FRONT-END
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var query_oracle_Router = require('./routes/query_oracle');
var query_db2_Router = require('./routes/query_db2');

var app = express();

// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// SE TIENEN QUE ESCRIBIR ACA LAS PAGINAS
app.use('/', indexRouter);
app.use('/api/users', cors() ,usersRouter);
app.use('/api/query_oracle', query_oracle_Router);
app.use('/api/query_db2', query_db2_Router);



const config = require('./config');


app.use(cors(
    config.application.cors.server
));


// app.use(cors({
//     origin: ['http://192.168.10.237:3000','http://192.168.10.237:3001','192.168.10.237:3000','192.168.10.237:3001'],}
// ));

// Configurar cabeceras y cors
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//   res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
//   next();
// });

// app.use(cors());
// app.use(
//     cors({
//       origin: ['http://192.168.10.237:3000'],
//       methods: ['GET', 'POST', 'PUT', 'DELETE'],
//       // allowedHeaders: ['Content-Type', 'Authorization'],
//     })
// );
// app.use(cors({ "Access-Control-Allow-Origin" : "http://localhost:3001/" }));
// app.use(cors({ "Access-Control-Allow-Origin" : "http://192.168.10.237:3001/" }));
//
// app.use(cors({
//   origin: '*'
// }));
//
// app.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Headers', 'X-Requested-With')
//   next()
// });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
