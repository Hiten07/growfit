const express = require('express');
const router = express.Router();
const authcontrollers = require('../controllers/auth-controllers');
const registerValidateSchema = require('../validators/auth-validation');
const validate = require('../middlewares/validationRegister');
const authMiddleware = require('../middlewares/authMiddleware');

router.route("/").get(authcontrollers.home);
router.route("/register").post(validate(registerValidateSchema),authcontrollers.register);
router.route("/login").post(authcontrollers.login);
router.route("/user").get(authMiddleware, authcontrollers.user);

module.exports = router; 