"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "ШАУРМА",
          img: "https://secretmag.ru/thumb/1200x0/filters:quality(75):no_upscale()/imgs/2023/07/07/16/5999740/6e64db707d8288472011de1950eeffd1b3cd4bd4.jpg",
        },
        {
          name: "СПАНЧ БОБ",
          img: "https://upload.wikimedia.org/wikipedia/ru/4/4d/SpongeBob_SquarePants_characters_cast.png",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
