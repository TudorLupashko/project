"use strict";

// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

// const obj = {
// name:"Tudor",
// age: 30,
// isMarried:true 
// };
// console.log(obj.name);

// let arr = ["plum.png","hust.jpg",10,"green.bpm"]
// console.log(arr [1]);
// const result = confirm ("Are you here&");
// console.log(result);
// const answer = +prompt('Вам есть 18?', "");
// console.log(answer + 5);

// const answers = [];

// // answers[0] = prompt("Как вас зовут?");
// // answers[1] = prompt("Как вас зовут?");
// // answers[2] = prompt("Как вас зовут?");

// // // console.log(typeof(answers));
// // const user = "Tudor";

// // alert(`Привет,${user}`);
// // console.log(2*4 === "8");
// const isChecked = true,
//       isClose = true;

// console.log(isChecked || isClose);      
const number0fFilms = +prompt ('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?',''),
      b = prompt('На сколько оцените его?',''),
      c = prompt('Один из последних просмотренных фильмов?',''),
      d = prompt('На сколько оцените его?','');

      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;

      console.log(personalMovieDB);








