const db=require('../db/models');//index.js=>db
const Company=db.Company;

// 1. select * from Company => findAll
exports.findAll=(req,resp)=>{
    Company.findAll()
       .then(data=>resp.json(data))
        .catch(err=>{
            resp.status(500)
                .send({message:err.message||
                `Something went wrong`})
      });
};

// 2. select * from Company where id=?=>findByPK
exports.findByPk=(req,resp)=>{
    const id=parseInt(req.params.id);
    Company.findByPk(id)
        .then(data=>resp.json(data))
        .catch(err=>{
            resp.status(500)
                .send({message:err.message||
               `Something went wrong`})
        });
};

exports.createCompany=(req,resp)=>{
    if(!req.body.companyName){
        resp.status(400)
        .send({message:"Company name must be provided"});
   }
     const newCompany={
       companyName:req.body.companyName,
       companyAddress:req.body.companyAddress,
       companyState:req.body.companyState,
       companyCity:req.body.coompanyCity,
       companyContactno:req.body.companyContact,
       craetedAt:new Date(),
       updatedAt:new Date()
    };
    Company.create(newCompany)
    .then(data=>resp.send(data))
    .catch(err=>{
        resp.status(500)
        .send({message:err.message})
   })
};

exports.updateCompany=(req,resp)=>{
    const c_id=parseInt(req.params.id);
    exports.update=(req,resp)=>{
        Company.update(req.body,{where:{id:c_id}})
    .then(num=>{
        if(num>1){
            resp.send({message:`Company with id= ${id} updated successfully`});
        }
        else{
            resp.send({message:`Company can't with id ${id} updated successfully`});
        }
    })
    .catch(err=>{
        resp.status(500)
        .send({message:err.message || "some error retriving Company data"})
    })

   }  

   exports.deleteCompany=(req,resp)=>{
    const c_id=parseInt(req.params.id);
    Company.destroy({where:{id:c_id}})   
    .then(num=>{
        if(num==1){
            resp.send({message:`Company with id=${id} deleted sucessfully!`});
        }
        else{
            resp.send({message:`Company can not delet with id=${id} deleted sucessfully may be Admin not found!`});
        }
    })
    .catch((err=>{
        resp.status(500).send({
            message:err.message || "could not Company Admin with id ="+id
        })
    }))
}
}