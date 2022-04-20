const jwt = require('jsonwebtoken')

const JWT_SECRET = 'this is a secret'

const signToken = (user) => {
    return jwt.sign(user.toJSON(), JWT_SECRET, { expiresIn: '7d' })
}

const verifyToken = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization
        const token = authHeader.split(' ')[1]
        
        jwt.verify(token, JWT_SECRET, (err, user) => {
            if (err) {
                return res.status(401).json({ message: 'Unauthorized' })
            }
            req.user = user
            next()
        })
    } catch (err) {
        res.status(401).json({ message: 'Unauthorized' })
    }
}

module.exports = {
    signToken,
    verifyToken
}