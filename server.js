const express = require('express');
const { verifyToken } = require('./authentication/auth')
const app = express();
const todoRoutes = require('./Routes/todoRoutes');
const userRoutes = require('./Routes/userRoutes');
app.use(express.json());

app.use('/todo',verifyToken ,todoRoutes);
app.use('/user',userRoutes);

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
});
  