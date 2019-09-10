import {
  Observable,
  from,
  fromEvent,
  interval
} from "rxjs";
import { ajax } from "rxjs/ajax";
import {
  filter,
  map,
  scan,
  switchMap
} from "rxjs/operators";

const observable$ = new Observable(function(sub) {
  console.log("sub.next(1)");
  sub.next(1);
  sub.next(2);
  sub.next(3);
  // sub.error(new Error("Oops"));
  sub.next(4);
  setTimeout(() => sub.next(5), 5000);

  sub.complete();
});

observable$.subscribe(
  function(e) {
    console.log(e);
  },
  function(err) {
    console.error(err);
  },
  function() {
    console.log("Completed");
  }
);

const mapNumbers = document.getElementById("mapNumbers");
const startTimer = document.getElementById("startTimer");
const loadJokes = document.getElementById("loadJokes");
const result = document.getElementById("result");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const jokesUrl =
  "http://api.icndb.com/jokes/random/10/?limitTo=[nerdy]&escape=javascript";

// mapNumbers.addEventListener("click", () => {
// const evenNumbers = numbers
//   .filter(n => n % 2 === 0)
//   .map(n => ({ n }));

fromEvent(mapNumbers, "click")
  .pipe(
    switchMap(() =>
      from(numbers).pipe(
        filter(n => n % 2 === 0),
        map(n => ({ n })),
        scan((p, c) => [...p, c], [])
      )
    )
  )
  .subscribe(function(evenNumbers) {
    result.textContent = JSON.stringify(evenNumbers);
  });
// });

// startTimer.addEventListener("click", () => {
//   const values = [];
//   let n = 0;
//   setInterval(() => {
//     n += 1;
//     if (n % 2 === 0) {
//       values.push({ n });
//       result.textContent = JSON.stringify(values);
//     }
//   }, 1000);
// });

fromEvent(startTimer, "click")
  .pipe(
    switchMap(() =>
      interval(1000).pipe(
        filter(n => n % 2 === 0),
        map(n => ({ n })),
        scan((p, c) => [...p, c], [])
      )
    )
  )
  .subscribe(function(evenNumbers) {
    result.textContent = JSON.stringify(evenNumbers);
  });

// loadJokes.addEventListener("click", () => {
//   fetch(jokesUrl)
//     .then(rsp => rsp.json())
//     .then(data => data.value)
//     .then(jokes => {
//       result.textContent = JSON.stringify(jokes);
//     });
// });

fromEvent(loadJokes, "click")
  .pipe(switchMap(() => ajax.getJSON(jokesUrl)))
  .subscribe(function(jokes) {
    result.textContent = JSON.stringify(jokes);
  });
