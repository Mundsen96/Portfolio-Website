import meme_generator from './Images/Meme-generator.png';
import tenzies from './Images/Tenzies.png';
import airbnb from './Images/Airbnb.png';
import quizGame from './Images/QuizGame.png';
import travel from './Images/TravelJournal.png';
import portfolio from './Images/MagdaPortfolio.png';

export const projects = [
  {
    name: 'Tenzies',
    comment: 'Tenzies Game',
    imageURL: tenzies,
    href: 'https://github.com/Mundsen96/Tenzies',
    id: 1,
  },
  {
    name: 'Quiz Game',
    comment:
      'A Quiz-game, created in React, which takes random questions from API, based on the custom attributes, taken by form on first screen. The API addres is https://opentdb.com/api_config.php.',
    imageURL: quizGame,
    href: 'https://github.com/Mundsen96/Quiz-Game',
    id: 2,
  },
  {
    name: 'Meme Generator',
    comment: 'Meme Generator, which takes photos from API',
    imageURL: meme_generator,
    href: 'https://github.com/Mundsen96/Meme-Generator',
    id: 3,
  },
  {
    name: 'Airbnb Copy',
    comment: 'Copy of Airbnb page',
    imageURL: airbnb,
    href: 'https://github.com/Mundsen96/airbnb',
    id: 4,
  },
  {
    name: 'Travel Journal',
    comment: 'Simple Travel Journal',
    imageURL: travel,
    href: 'https://github.com/Mundsen96/travel-journal-React',
    id: 5,
  },
  {
    name: 'Magda Portfolio',
    comment: 'Portfolio made for Graphic Designer',
    imageURL: portfolio,
    href: 'https://sokolowskaportfolio.netlify.app',
    id: 6,
  },
];
