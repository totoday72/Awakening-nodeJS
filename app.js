var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
var methodOverride = require('method-override');

// ACA SE AGREGAN LAS RUTAS PARA LAS PAGINAS DEL FRONT-END
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var query_oracle_Router = require('./routes/query_oracle');
var query_db2_Router = require('./routes/query_db2');
var upload_images_Router = require('./routes/uploads/upload_file');


// ACA SE AGREGAN LAS RUTAS PARA INSERTS
var insert_empleado_Router = require('./routes/inserts/insert_empleado');

// view engine setup
var app = express();

// definir el tamaño maximo de el body de los request como post, siempre se coloca antes del enrutador
app.use(bodyParser.urlencoded({extended: true, limit: '50mb'}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(methodOverride());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// SE TIENEN QUE ESCRIBIR ACA LAS PAGINAS PARA LAS APIS ACA SE HABILITA CORS
app.use('/', cors(), indexRouter);
app.use('/api/users', cors(), usersRouter);
app.use('/api/query_oracle', cors(), query_oracle_Router);
app.use('/api/query_db2', cors(), query_db2_Router);
app.use('/api/empleado', cors(), insert_empleado_Router);
app.use('/api/upload/images', cors(), upload_images_Router);


const config = require('./config');


app.use(cors(
    config.application.cors.server
));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
