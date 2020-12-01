const db =require('../database/models')

const {check,validationResult,body} = require('express-validator');
const bcrypt = require('bcrypt');

module.exports = [

    check('direccion')
    .isLength({
        min:2
    })
    .withMessage('Debes ingresar tu direccion'),

    check('localidad')
    .isLength({
        min:2
    })
    .withMessage('Debes ingresar tu localidad'),

    check('provincia')
    .isLength({
        min:2
    })
    .withMessage('Debes ingresar tu provincia'),
    






   //no se puede usar todavia la actualizacion de contraseña// 
  /*  body('password')
    .custom(function(value,{req}){
        return db.Users.findByPk(req.session.user.id)
        .then(user =>{
           
            if(!bcrypt.compareSync(value,user.
                password)){
                    console.log(bcrypt.compareSync(value,user.
                        password))
                return Promise.reject('Contraseña invalida')
            } else{
                return true
            }
        })
        .catch(error =>{
            return Promise.reject('Contraseña invalida')
        })
    }),

    check('pass')
    .isLength({
        min:6,
        max:12
    })
    .withMessage("Debes ingresar una contraseña entre 6 y 12 caracteres"),

    body('pass2')
    .custom((value,{req}) => {
        if(value != req.body.pass){
            return false
        }
        return true
    })
    .withMessage("Las constraseñas no coiciden")*/
]