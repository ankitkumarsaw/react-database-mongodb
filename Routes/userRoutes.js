const express = require('express')
const router = express.Router()
const { verifyToken } = require('../authentication/auth')

const { loginUser, registerUser, getProfile } = require('../Controller/userController')

router.post('/login', loginUser)

router.post('/register', registerUser)

router.get('/profile', verifyToken, getProfile)

module.exports = router