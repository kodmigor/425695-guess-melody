const LIVES = 3;
const SECOND_MS = 1000;
const FAST_RIGHT_ANSWER_TIME = SECOND_MS * 30;
const GRADE = 1;
const BONUS_GRADE = 2;
const FAIL_GRADE = 2;

const getScoreCount = (game) => {
  let score = {
    total: 0,
    fast: 0
  };
  if (game.answers.length !== 0) {
    const gradesForAnswers = game.answers
    .map((answer) => {
      let gradesForAnswer = 0;
      if (answer.isSuccess && answer.time >= FAST_RIGHT_ANSWER_TIME) {
        gradesForAnswer = GRADE;
      }
      return gradesForAnswer;
    })
    .reduce((a, b) => a + b);
    const gradesForFastAnswers = game.answers
    .map((answer) => {
      let gradesForAnswer = 0;
      if (answer.isSuccess && answer.time < FAST_RIGHT_ANSWER_TIME) {
        gradesForAnswer = BONUS_GRADE;
      }
      return gradesForAnswer;
    })
    .reduce((a, b) => a + b);
    const fails = LIVES - game.lives;
    const gradesForFails = fails * FAIL_GRADE;
    const total = gradesForAnswers + gradesForFastAnswers - gradesForFails;
    score = {
      total,
      fast: gradesForFastAnswers
    };
  } else {
    score = -1;
  }
  return score;
};

export default getScoreCount;
