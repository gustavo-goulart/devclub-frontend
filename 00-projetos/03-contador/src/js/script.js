let number = 0;
let crono;
let h2 = document.querySelector("h2");

function start() {
  crono = setInterval(() => {
    number++;

    h2.innerHTML = number;
  }, 1000);
}

function stop() {
  clearInterval(crono);
}

function reset() {
  number = "00:00:00";

  h2.innerHTML = number;
}
