const mongoose = require('mongoose')

// He realizado esta condicional para en caso que no logre configurar mi base de dato en su computador pues le cree una local en su equipo 
// con el schema que configurado 
const URI = process.env.URI_DB ?  process.env.URI_DB : "mongodb://localhost/mdbtest"



const conexion =  async() =>{
    try {
        await mongoose.connect(URI, ()=> console.log('database conected success')
        )
    } catch (error) {
      console.log(error)  
    }
}



module.exports = conexion()