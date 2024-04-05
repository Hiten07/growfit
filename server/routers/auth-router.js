const express = require('express');
const router = express.Router();
const authcontrollers = require('../controllers/auth-controllers');
const registerValidateSchema = require('../validators/auth-validation');
const validate = require('../middlewares/validationRegister');

router.route("/").get(authcontrollers.home);
router.route("/register").post(validate(registerValidateSchema),authcontrollers.register);
router.route("/login").post(authcontrollers.login);

module.exports = router; 