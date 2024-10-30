const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
   nombres: { type: String, required: true },
   apellidos: { type: String, required: true },
   dniOpassaporte: { type: String, required: true, unique: true },
   pais: String,
   provincia: String,
   ciudad: String,
   edad: Number,
   fechaNacimiento: String,
   empresa: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
   aniosExperiencia: Number,
   aniosEmpresaActual: Number,
   tecnologias: [String],
   expectativaSalarial: Number,
   isAdmin: { type: Boolean, default: false },
   email: { type: String, required: true, unique: true },
   password: { type: String, required: true },
});

module.exports = mongoose.model('userModel', userModel);
