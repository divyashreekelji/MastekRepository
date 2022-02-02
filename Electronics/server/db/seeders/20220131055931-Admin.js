'use strict';
	module.exports = {
	  up: async (queryInterface, Sequelize) => {
		  await queryInterface.bulkInsert('Admins', [
			{
			firstName: 'Divya',
			lastName:'Karangutkar',
      username:'divya',
      password:'divya',
			createdAt: new Date(),
			updatedAt: new Date()
		   },
		   {
			firstName: 'Anand',
			lastName:'Jaiswar',
            username:'anand',
            password:'anand',
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
