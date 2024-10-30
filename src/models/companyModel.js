const mongoose = require('mongoose');

const companyModel = new mongoose.Schema({
   nombre: { type: String, required: true },
   ubicacion: String,
   telefono: String,
   cuitCuil: String,
   descripcion: String,
   cantidadEmpleados: Number,
   rubro: String,
   tecnologias: [String],
});

module.exports = mongoose.model('Company', companyModel);
