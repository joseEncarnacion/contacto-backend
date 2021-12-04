const dataValidation = (data)=>{
    const {name, lastname, email, phone} = data


    // nombre
    if(typeof name != 'string'){
        throw new Error ("El campos nombre debe completarse solo con letras")
    }
    
    if(name.length <=3 ){
        throw new Error ("Cantidad de letras no validas, favor ingresar datos correctos")
    }
    
    if(!/^[a-z]+$/i.test(name)){
        throw new Error ("Error en los datos suministrados")
    }


    
    // Apellidos
    if(typeof lastname != 'string'){
        throw new Error ("El campos nombre debe completarse solo con letras")
    }
    
    if(lastname.length <=3 ){
        throw new Error ("Cantidad de letras no validas, favor ingresar datos correctos")
    }
    
    if(!/^[a-z]+$/i.test(lastname)){
        throw new Error ("Error en los datos suministrados")
    }
    
    // telefono 

    // if(typeof phone != 'number'){
    //     throw new Error ("Este campos solo debe incluir numeros")
    // }
    
    if(phone <= 0){
        throw new Error ("Cantidad de letras no validas, favor ingresar datos correctos")
    }
    
    
    
    if(typeof email != 'string'){
        throw new Error ("debe contener caracteres validos")
    }
    
    if(! /^[a-z0-9_.]+@[a-z0-9]+\.[a-z0-9_.]+$/i.test(email)){
        throw new Error ("datos no validos, favor verificar email")
    }





}


module.exports = {
    dataValidation,
}