const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// Imprimir la URI para verificar si se carga correctamente
console.log('MONGODB_URI:', process.env.MONGODB_URI);

const connectDB = async () => {
   try {
      await mongoose.connect(process.env.MONGODB_URI, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
      });
      console.log('MongoDB connected');
   } catch (error) {
      console.error('MongoDB connection error:', error);
      process.exit(1);
   }
};

module.exports = connectDB;
