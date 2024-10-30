const companyRepository = require('../repositories/companyRepository');

const createCompany = async (companyData) => {
   const newCompany = await companyRepository.createCompany(companyData);
   return newCompany;
};

const getAllCompanies = async () => {
   return await companyRepository.findAll();
};

const getCompanyById = async (id) => {
   const company = await companyRepository.findById(id);
   if (!company) throw new Error('Company not found');
   return company;
};

const updateCompany = async (id, companyData) => {
   const updatedCompany = await companyRepository.updateCompany(id, companyData);
   if (!updatedCompany) throw new Error('Company not found');
   return updatedCompany;
};

const deleteCompany = async (id) => {
   const deletedCompany = await companyRepository.deleteCompany(id);
   if (!deletedCompany) throw new Error('Company not found');
   return deletedCompany;
};

module.exports = {
   createCompany,
   getAllCompanies,
   getCompanyById,
   updateCompany,
   deleteCompany,
};
