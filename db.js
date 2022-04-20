const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/test', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connection successful');
    } catch (err) {
        console.log('MongoDB connection failed', err.message);
    } 
}
connectDB();      

