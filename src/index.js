// Crea servidor en una constante para posterior poder inciar
const express = require('express');
const morgan = require("morgan");
// Constante para unir variables y evitar la diferencicion del sistema Operativo
const path = require("path");

const { mongoose } = require('./database');


const app = express();

// Se configura en secciones

/* Settings */
// Se define para que tome le puerto del sistema en caso de la nube o se configure un puerto especifico
app.set('port', process.env.PORT || 3000);

// Middlewares ->  funciones que se ejecutan antes de llegar a las rutas
app.use(morgan("dev"));
// Para decir que va a recibir archivos json
app.use(express.json());


// Routes
// El primer parametro indica como sera el path y el archovo routes valida hacia donde debe enviar
app.use('/api/tasks',require('./routes/task.routes'));


// Static files -> Indica donde estaran los archivos estaticos
//app.use(express.static())
console.log(path.join(__dirname,'public'));
app.use(express.static(path.join(__dirname,'public')))

// Iniciar el servidor
app.listen(app.get('port'),() => {
    console.log(`Server on port ${app.get('port')}`);
})