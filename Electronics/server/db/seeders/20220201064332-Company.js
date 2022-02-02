'use strict';
	module.exports = {
	  up: async (queryInterface, Sequelize) => {
		  await queryInterface.bulkInsert('Companies', [
			{
			companyName: 'Samsung',
			companyAddress:'Link Road',
      companyState:'Maharashtra',
      companyCity:'Mumbai',
      companyContactno: 62345,     
			createdAt: new Date(),
			updatedAt: new Date()


		   },
		   {
        companyName: 'HP',
        companyAddress:'Link Road',
        companyState:'Maharashtra',
        companyCity:'Mumbai',
        companyContactno: 62626,     
        createdAt: new Date(),
        updatedAt: new Date()
		   },
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
