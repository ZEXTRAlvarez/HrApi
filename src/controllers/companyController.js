const companyService = require('../services/companyService');

const createCompany = async (req, res) => {
   try {
      const newCompany = await companyService.createCompany(req.body);
      res.status(201).json(newCompany);
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
};

const getAllCompanies = async (req, res) => {
   try {
      const companies = await companyService.getAllCompanies();
      res.json(companies);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};

const getCompanyById = async (req, res) => {
   try {
      const company = await companyService.getCompanyById(req.params.id);
      res.json(company);
   } catch (error) {
      res.status(404).json({ message: error.message });
   }
};

const updateCompany = async (req, res) => {
   try {
      const updatedCompany = await companyService.updateCompany(req.params.id, req.body);
      res.json(updatedCompany);
   } catch (error) {
      res.status(404).json({ message: error.message });
   }
};

const deleteCompany = async (req, res) => {
   try {
      await companyService.deleteCompany(req.params.id);
      res.status(204).end();
   } catch (error) {
      res.status(404).json({ message: error.message });
   }
};

module.exports = {
   createCompany,
   getAllCompanies,
   getCompanyById,
   updateCompany,
   deleteCompany,
};
