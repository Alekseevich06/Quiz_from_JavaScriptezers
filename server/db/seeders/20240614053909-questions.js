'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Questions', [
        {
        name: 'Какой вид мяса традиционно используется для шаурмы? ',
        answer: "баранина",
        categotyId: 1, 
      },
      {
        name: 'Где родилась шаурма? ',
        answer: "турция",
        categotyId: 1, 
      },
      {
        name: 'Какое мясо можно использовать в вегетарианской шаурме?',
        answer: "тофу",
        categotyId: 1, 
      },
      {
        name: 'Каким видом мяса можно заменить баранину в шаурме? ',
        answer: "курица",
        categotyId: 1, 
      },
      {
        name: 'Как называется шаурма с томатами и луком?',
        answer: "итальянская",
        categotyId: 1, 
      },
      {
        name: 'Как называется шаурма с добавлением маринованных огурцов?',
        answer: "грузинская",
        categotyId: 1, 
      },
      {
        name: 'Как называется шаурма с добавлением картофеля? ',
        answer: "американская",
        categotyId: 1, 
      },
      {
        name: 'Кто главный герой мультфильма "Спанч Боб"?',
        answer: "спанчбоб",
        categotyId: 2, 
      },
      {
        name: 'Как зовут лучшего друга СпанчБоба?',
        answer: "патрик",
        categotyId: 2, 
      },
      {
        name: 'Как зовут учителя водолаза в Бикини Боттомском танке?',
        answer: "миссиспаф",
        categotyId: 2, 
      },
      {
        name: 'Как зовут белку, которая зарастает в морских губках?',
        answer: "сэнди",
        categotyId: 2, 
      },
      {
        name: 'Кто является врагом СпанчБоба?',
        answer: "планктон",
        categotyId: 2, 
      },
      {
        name: 'Есть ли у Мистера Крабса дети? (да, нет)',
        answer: "да",
        categotyId: 2, 
      },
      {
        name: 'Коронное блюдо ресторана «Красти Краб»',
        answer: "крабсбургер",
        categotyId: 2, 
      },
      {
        name: 'Где работает Патрик?',
        answer: "нигде",
        categotyId: 2, 
      },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('Questions', null, {});
     
  }
};
