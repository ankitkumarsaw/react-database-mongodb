const { signToken } = require('../authentication/auth');
const User = require('../models/userSchema');
const db = require('../db')
const registerUser = async (req, res) => {
    try {
        const { email } = req.body

        const user = await User.findOne({ email })
        if(user) return res.status(409).send({ message: 'A user with this email already exists' })

        const newUser = new User(req.body);
        await newUser.save();
        delete newUser.password;
        const token = signToken(newUser)
        return res.status(201).send({ message: 'User registered successfully', token })
    } catch (err) {
        console.log(err)
        return res.status(500).send({ message: err.message });
    }
}

const loginUser = async (req, res) => {
    try{ const { email, password } = req.body
        const result = req.body
        const user = await User.findOne({ email: result.email});

      if(user === null){
            return res.status(401).json({ message: 'Invalid credentials' })
      }else{

          if(user.email === email && user.password === password) {
            delete user.password
            const token = signToken(user)
          return  res.json({ token })
         } else{
          return res.status(401).json({ message: 'Invalid credentials' })
        }
      } 
        } catch (err) {
            return res.status(500).send({ message: err.message });
        }
    
    
}

const getProfile = (req, res) => {
   try{
    delete req.user.password
    res.send(req.user)
   } catch (err) {
       res.send(err.message)
   }
}

module.exports = {
    loginUser,
    registerUser,
    getProfile
}