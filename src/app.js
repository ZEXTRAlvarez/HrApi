const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const companyRoutes = require('./routes/companyRoutes');

const app = express();
app.use(cors());
app.use(express.json());




app.use('/api/users', userRoutes);
app.use('/api/companies', companyRoutes);

module.exports = app;
