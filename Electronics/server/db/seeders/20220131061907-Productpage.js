'use strict';

module.exports = {
  
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Productpages', [
      {
        productName: 'Hp1',
        productPrice:25000,
		productDescription:'this is new hp-ay020 laptop ',
       createdAt: new Date(),
       updatedAt: new Date()       

     },

     {     
        productName: 'Hp1',
        productPrice:25000,
		productDescription:'this is new hp-ay020 laptop ',
       createdAt: new Date(),
       updatedAt: new Date()        
    },

    {  
        productName: 'Hp1',
        productPrice:25000,
		productDescription:'this is new hp-ay020 laptop ',
       createdAt: new Date(),
       updatedAt: new Date()      

    }

  ], {});
},
async down (queryInterface, Sequelize) {
/**
* Add commands to revert seed here.
*
* Example:
* await queryInterface.bulkDelete('People', null, {});
*/
}
};
