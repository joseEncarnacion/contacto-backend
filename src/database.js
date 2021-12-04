const mongoose = require('mongoose')

const URI = process.env.URI_DB


// async function main() {
//     await mongoose.connect(URI, ()=> console.log('database conected sucess'));
// }
// main().catch(err => console.log(err));
const conexion =  async() =>{
    try {
        await mongoose.connect(URI, ()=> console.log('database conected success')
        )
    } catch (error) {
      console.log(error)  
    }
}


// module.exports = main()
module.exports = conexion()