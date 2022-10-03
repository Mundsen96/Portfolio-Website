import meme_generator from './Images/Meme-generator.png';
import tenzies from './Images/Tenzies.png';
import airbnb from './Images/Airbnb.png';
import quizGame from './Images/QuizGame.png';
import travel from './Images/TravelJournal.png';
import portfolio from './Images/MagdaPortfolio.png';
import email from './Images/E-mailApp.png';
import userrandom from './Images/randomAPI.png';

export const projects = [
  {
    name: 'E-mail App',
    comment: 'Small E-mail app, which uses mongoDB to store data from the user.',
    imageURL: email,
    href: 'https://task5sebastianmlotkowski.herokuapp.com',
    id: 1,
  },
  {
    name: 'Random User',
    comment: 'Random user from chosen country with randomly placed errors generator. Also CSV functionality',
    imageURL: userrandom,
    href: 'https://github.com/Mundsen96/Tenzies',
    id: 2,
  },
  {
    name: 'Tenzies',
    comment: 'Tenzies Game',
    imageURL: tenzies,
    href: 'https://task6sebastianmlotkowski.netlify.app',
    id: 3,
  },
  {
    name: 'Quiz Game',
    comment:
      'A Quiz-game, created in React, which takes random questions from API, based on the custom attributes, taken by form on first screen. The API addres is https://opentdb.com/api_config.php.',
    imageURL: quizGame,
    href: 'https://github.com/Mundsen96/Quiz-Game',
    id: 4,
  },
  {
    name: 'Meme Generator',
    comment: 'Meme Generator, which takes photos from API',
    imageURL: meme_generator,
    href: 'https://github.com/Mundsen96/Meme-Generator',
    id: 5,
  },
  {
    name: 'Airbnb Copy',
    comment: 'Copy of Airbnb page',
    imageURL: airbnb,
    href: 'https://github.com/Mundsen96/airbnb',
    id: 6,
  },
  {
    name: 'Travel Journal',
    comment: 'Simple Travel Journal',
    imageURL: travel,
    href: 'https://github.com/Mundsen96/travel-journal-React',
    id: 7,
  },
  {
    name: 'Magda Portfolio',
    comment: 'Portfolio made for Graphic Designer',
    imageURL: portfolio,
    href: 'https://sokolowskaportfolio.netlify.app',
    id: 6,
  },
];
