import tracks from "./audio-list";
// import {GENRE_ANSWER} from "../../data/constants";

const genreAnswers = tracks.slice(0, 4);

export const levels = {
  "genre": {
    title: `Выберите инди-рок треки`,
    questions: genreAnswers,
    answer: `Indie-Rock`
  },
  "artist": {
    title: `Кто исполняет эту песню?`
  }
};
