const settings = {
  luckText: `Тестовый текст на удачу`,
  gameTime: 50,
  mistakesCount: 2
};

const questions = [
  {
    type: `genre`,
    genre: {
      name: `pop`,
      displayName: `Поп`
    },
    answers: [
      {
        id: 1,
        src: `song.mp3`,
        genre: `pop`
      },
      {
        id: 2,
        src: `song.mp3`,
        genre: `rap`
      }
    ]
  },
  {
    type: `artist`,
    song: {
      src: `song.mp3`,
      artist: `Test`
    },
    answers: [
      {
        picture: `pic.jpeg`,
        artist: `Test`
      },
      {
        picture: `pic.jpeg`,
        artist: `Test 2`
      },
      {
        picture: `pic.jpeg`,
        artist: `Test 3`
      }
    ]
  }
];

const appParams = {
  gameSettings: settings,
  gameQuestions: questions
};

export {settings, questions, appParams};
