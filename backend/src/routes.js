const express = require('express')
const routes = express.Router()


const ProfileController = require('./controllers/ProfileController')
const ContractsController = require('./controllers/ContractsController')
const CompaniesController = require('./controllers/CompaniesControllers')
const HospitalsController = require('./controllers/HospitalsController')



routes.get('/', ProfileController.index)
routes.post('/', ProfileController.search)

routes.get('/contracts-sum', ContractsController.index)
routes.get('/contract-max', ContractsController.search_max)


routes.get('/contracts-sum-2008', ContractsController.search_sum_2008)
routes.get('/contract-max-2008', ContractsController.search_max_2008)
routes.get('/contracts-sum-2009', ContractsController.search_sum_2009)
routes.get('/contract-max-2009', ContractsController.search_max_2009)
routes.get('/contracts-sum-2010', ContractsController.search_sum_2010)
routes.get('/contract-max-2010', ContractsController.search_max_2010)
routes.get('/contracts-sum-2011', ContractsController.search_sum_2011)
routes.get('/contract-max-2011', ContractsController.search_max_2011)

routes.get('/contract-number', CompaniesController.search_max_companies)
routes.get('/contract-number-2008', CompaniesController.search_max_2008_companies)
routes.get('/contract-number-2009', CompaniesController.search_max_2009_companies)
routes.get('/contract-number-2010', CompaniesController.search_max_2010_companies)
routes.get('/contract-number-2011', CompaniesController.search_max_2011_companies)


routes.get('/search-top-10-companies', CompaniesController.search_top_10_companies)
routes.get('/search-top-10-companies-2008', CompaniesController.search_top_10_companies_2008)
routes.get('/search-top-10-companies-2009', CompaniesController.search_top_10_companies_2009)
routes.get('/search-top-10-companies-2010', CompaniesController.search_top_10_companies_2010)
routes.get('/search-top-10-companies-2011', CompaniesController.search_top_10_companies_2011)

routes.get('/search-top-10-hospitals', HospitalsController.search_top_10_hospitals)
routes.get('/search-top-10-hospitals-2008', HospitalsController.search_top_10_hospitals_2008)
routes.get('/search-top-10-hospitals-2009', HospitalsController.search_top_10_hospitals_2009)
routes.get('/search-top-10-hospitals-2010', HospitalsController.search_top_10_hospitals_2010)
routes.get('/search-top-10-hospitals-2011', HospitalsController.search_top_10_hospitals_2011)

routes.get('/search-top-10-minus-hospitals', HospitalsController.search_top_10_minus_hospitals)
routes.get('/search-top-10-minus-hospitals-2008', HospitalsController.search_top_10_minus_hospitals_2008)
routes.get('/search-top-10-minus-hospitals-2009', HospitalsController.search_top_10_minus_hospitals_2009)
routes.get('/search-top-10-minus-hospitals-2010', HospitalsController.search_top_10_minus_hospitals_2010)
routes.get('/search-top-10-minus-hospitals-2011', HospitalsController.search_top_10_minus_hospitals_2011)


module.exports = routes;