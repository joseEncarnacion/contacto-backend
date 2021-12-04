const {Router} = require('express');
const router = Router();


const {getAllRegister, createRegister, getOneRegister, deleteRegister, uppdateRegister} = require('../Controllers/contacto.Controller')


router.route('/')
    .get(getAllRegister)
    .post(createRegister)

router.route('/:id')
    .get(getOneRegister)
    .put(uppdateRegister)
    .delete(deleteRegister)
    
    // router.route('/contacto/:id')
    //     .get(getOneRegister)
    //     .put(uppdateRegister)
    //     .delete(deleteRegister)

module.exports = router;