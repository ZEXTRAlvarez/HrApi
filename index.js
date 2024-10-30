const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./src/app'); 

dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGODB_URI;

console.log(process.env.MONGODB_URI);

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => {
      console.log('Connected to MongoDB');
      app.listen(PORT, () => {
         console.log(`Server running on http://localhost:${PORT}`);
      });
   })
   .catch((error) => {
      console.error('MongoDB connection error:', error);
   });
