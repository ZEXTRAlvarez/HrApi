const express = require('express');
const {
   createCompany,
   getAllCompanies,
   getCompanyById,
   updateCompany,
   deleteCompany,
} = require('../controllers/companyController');
const { verifyToken, isAdmin } = require('../middleware/auth');

const router = express.Router();

router.post('/company', verifyToken, isAdmin, createCompany); // Solo admin puede crear empresas
router.get('/', verifyToken, getAllCompanies); // Consultar todas las empresas
router.get('/:id', verifyToken, getCompanyById); // Consultar empresa por ID
router.put('/:id', verifyToken, isAdmin, updateCompany); // Actualizar empresa (solo admin)
router.delete('/:id', verifyToken, isAdmin, deleteCompany); // Eliminar empresa (solo admin)

module.exports = router;
