"use strict"
//const result = confirm("Are you here?")
//console.log(result);
//const answer = +prompt("Vam est 18?");
//console.log(answer + 5);
//const answers = [];
//answers[0] = prompt('как ваше имя?', '');
//answers[1] = prompt('как ваше фамилия?', '');
//answers[2] = prompt('сколько вам лет?', '');
//document.write(answers);


//const category = 'toys';
//console.log(`https://someurl.com/${category}/5`);
//const user = 'Ivan';
//alert(`Hello ${user}`);


//let incr = 10,
//  decr = 10;

//console.log(incr++);
//console.log(decr--);


//const isChecked = true,
//    isClose = false;
//console.log(isChecked && !isClose);







'use strict';
const numberOfFilms = +prompt('Сколько фильмоы вы посмотрели?', '');
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};
const lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
  markOfFilm = prompt('На сколько вы  оцените?', ''),
  a = prompt('Один из последних просмотренных фильмов?', ''),
  b = prompt('На сколько вы  оцените?', '');

personalMovieDB.movies[lastFilm] = markOfFilm;
personalMovieDB.movies[a] = b;
console.log(personalMovieDB);


  




