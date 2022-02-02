module.exports=(app)=>{

    const express=require('express');

    const ROUTER=express.Router();

     // Product
    // const ProductpageController=require('./productpage-controller');
    // ROUTER.get('/productpages',ProductpageController.findAll);
    // ROUTER.get('/productpages/:id',ProductpageController.findByPk);
    // ROUTER.post('/productpages/add',ProductpageController.createProductpage);
    // ROUTER.put('productpages/update/:id',ProductpageController.updateProductpage);
    // ROUTER.delete('/productpages/delete/:id',ProductpageController.deleteProductpage);

    //Admin
    const LoginComponent=require('./admin-controller');
     ROUTER.get('/admin',LoginComponent.findAll);
     ROUTER.get('/admin/:id',LoginComponent.findByPk);
     ROUTER.post('/admin/add',LoginComponent.createAdmin);
    // ROUTER.put('admin/update/:id',LoginComponent.updateAdmin);
   //  ROUTER.delete('admin/delete/:id',LoginComponent.deleteAdmin);

    // Company
     const CompanyComponent=require('./company-controller');
     ROUTER.get('/company',CompanyComponent.findAll);
     ROUTER.get('/company/:id',CompanyComponent.findByPk);
     ROUTER.post('/company/add',CompanyComponent.createCompany);
     ROUTER.put('company/update/:id',CompanyComponent.updateCompany);
     ROUTER.delete('company/delete/:id',CompanyComponent.deleteCompany);

    app.use('/app',ROUTER);

}