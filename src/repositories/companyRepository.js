const Company = require('../models/companyModel');

const findById = (id) => Company.findById(id);
const findAll = () => Company.find({});
const createCompany = (companyData) => Company.create(companyData);
const updateCompany = (id, companyData) => Company.findByIdAndUpdate(id, companyData, { new: true });
const deleteCompany = (id) => Company.findByIdAndDelete(id);

module.exports = {
   findById,
   findAll,
   createCompany,
   updateCompany,
   deleteCompany,
};
