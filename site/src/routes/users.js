var express = require('express');
var router = express.Router();
const userController = require('../controllers/usersController');
const loginValidator = require('../validations/loginValidator');
const registerValidator = require('../validations/registerValidator');
const upImagesUsers = require('../middlewares/upImagesUsers');
const mwUser = require('../middlewares/mwUser');
const userUpdateValidator = require('../validations/userUpdateValidator')
const md = require('../middlewares/md')


router.get('/register',md, userController.register);
router.post('/register', upImagesUsers.any(),registerValidator, userController.processRegister);

router.get('/login',md, userController.login);
router.post('/login', loginValidator, userController.processLogin);

router.get('/profile',mwUser, userController.profile);
router.put('/profileEdit/:id', upImagesUsers.any(), userController.profileEdit)

router.get('/logout',mwUser, userController.logout);

router.delete('/delete/:id',mwUser, userController.delete);


module.exports = router;
