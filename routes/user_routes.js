const Router = require('express');
const router = new Router();
const userContorller = require('../controllers/user_controller');

router.post('/user',userContorller.createUser);
router.get('/user',userContorller.getUsers);
router.get('/user/:id',userContorller.getOneUser);
router.put('/user/',userContorller.updateUser);
router.delete('/user/:id',userContorller.deleteUser);

module.exports = router;