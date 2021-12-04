// i have created this obj to organize the http methods, please go to the contacto.route.js file to continue the path
const contactCtr = {}

// importing DB_Context
const DB_Context = require('../Model/contacto.dbContent')
const validation = require('../Helpers/validate.contacto')


// GET ALL ITEMS

contactCtr.getAllRegister = async(req, res) =>{
    const getAll =  await DB_Context.find()
    if(getAll.length > 1){
        res.status(200).json({
            status: 200,
            data: getAll
        })
    }else{
        res.status(200).json({
            status: 200,
            message: "No existen datos guardados en la base de datos"
        })
    }
    
    
}

// GET ONE ITEM

contactCtr.getOneRegister = async(req, res) =>{
   
    const getOne = await DB_Context.findById(req.params.id)
    res.json(getOne)
}


// POST;  validation function located in helpers folder

contactCtr.createRegister = async(req, res) =>{
    validation.dataValidation(req.body)
    const {name, lastname, email, phone} = req.body

     const newRegister = new DB_Context({
         name, lastname, email, phone
     })
     await newRegister.save()
     res.send('success')

}


// PUT

contactCtr.uppdateRegister = async(req, res) =>{
    validation.dataValidation(req.body)

    const {name, lastname, email, phone} = req.body
    await DB_Context.findByIdAndUpdate(req.params.id,{
        name, lastname, email, phone
    });

    res.json({ 
        estatus: 200,   
        message: "Data registered ok "
    })
}


// DELETE

contactCtr.deleteRegister = async(req, res) =>{
    await DB_Context.findByIdAndDelete(req.params.id)
    res.json({
        status:200,
        message: "item delete success"
    })
}


module.exports = contactCtr