const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://Aks:shreya0504@cluster0.1ks7j.mongodb.net/test', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connection successful');
    } catch (err) {
        console.log('MongoDB connection failed', err.message);
    } 
}
connectDB();      

