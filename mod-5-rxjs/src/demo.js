const mapNumbers = document.getElementById("mapNumbers");
const startTimer = document.getElementById("startTimer");
const loadJokes = document.getElementById("loadJokes");
const result = document.getElementById("result");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const jokesUrl =
  "http://api.icndb.com/jokes/random/10/?limitTo=[nerdy]&escape=javascript";

mapNumbers.addEventListener("click", () => {
  const evenNumbers = numbers
    .filter(n => n % 2 === 0)
    .map(n => ({ n }));

  result.textContent = JSON.stringify(evenNumbers);
});

startTimer.addEventListener("click", () => {
  const values = [];
  let n = 0;
  setInterval(() => {
    n += 1;
    if (n % 2 === 0) {
      values.push({ n });
      result.textContent = JSON.stringify(values);
    }
  }, 1000);
});

loadJokes.addEventListener("click", () => {
  fetch(jokesUrl)
    .then(rsp => rsp.json())
    .then(data => data.value)
    .then(jokes => {
      result.textContent = JSON.stringify(jokes);
    });
});
