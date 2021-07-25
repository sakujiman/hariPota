let count = 0;
const mainElement = document.querySelector("div.main>img");
const url = [
"https://static2.srcdn.com/wordpress/wp-content/uploads/2020/10/Daniel-Radcliffe-as-Harry-Potter-1.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5"
"https://static1.srcdn.com/wordpress/wp-content/uploads/2020/05/Tom-Felton-as-Draco-Malfoy-in-Harry-Potter.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5"
"https://static0.srcdn.com/wordpress/wp-content/uploads/2016/12/Alan-Rickman-as-Severus-Snape-Death-Scene-in-Harry-Potter-and-the-Deathly-Hallows-Part-2.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5"
"https://static2.srcdn.com/wordpress/wp-content/uploads/2020/02/Hermione-Granger-1.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5"
"https://static1.srcdn.com/wordpress/wp-content/uploads/2019/06/Albus-Dumbledore.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5"
"https://static2.srcdn.com/wordpress/wp-content/uploads/2020/08/1400x700-4-7.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5"
"https://static1.srcdn.com/wordpress/wp-content/uploads/2019/11/Harry-Potter-Lord-Voldemort.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5"
"https://static1.srcdn.com/wordpress/wp-content/uploads/2020/11/McGonagall-Cropped.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5"
"https://static0.srcdn.com/wordpress/wp-content/uploads/2020/07/Rubeus-Hagrid.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5"
];

function left() {
  // console.log(count);
  count--;
  if (count <= 0) {
    count = url.length-1;
  }
mainElement.setAttribute('src', url[count]);
}
function right() {
  count++;
  if (count >= url.length) {
    count = 0;
  }
mainElement.setAttribute('src', url[count]);
}

let timer;
let nowPlaying = false;

function autoPlay() {
right();
  timer = setTimeout(function() {
    autoPlay();
  }, 200);
}

function play() {
  if (nowPlaying) {
    return;
  }
  nowPlaying = true;
  autoPlay();
}

function stop() {
clearTimeout(timer);
  nowPlaying = false;
}

function reset() {
  stop();
  mainElement.setAttribute('src', url[0]);
  count = 0;
}
