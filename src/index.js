const express =  require('express');
const cors = require('cors');
const morgan =require('morgan');
const path = require('path')
const app = express();


// settings
app.set('port', process.env.PORT || 3009 )
require('dotenv').config()
require('./database')

// Midleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//  Routes
app.use('/api/contacto', require('./Routes/contacto.route'))


// lost conection
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('server error status: 500!');
  });

  app.use(function(req, res, next) {
    res.status(404).send('Lo sentimos Ruta incorrecta! error 404');
  });

// statics
app.use(express.static(path.join(__dirname, 'public')))


// server init
const main = async() =>{
    await app.listen(app.set('port'))
    console.log('Server on port', app.set('port'))
    
}
main()
