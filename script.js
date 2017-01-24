var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');

var boom = document.getElementById('boom');
var kick = document.getElementById('kick');
var snare = document.getElementById('snare');

button1.addEventListener('click', function () {
  boom.play();
});
button2.addEventListener('click', function () {
  kick.play();
});
button3.addEventListener('click', function () {
  snare.play();
});
button1.addEventListener("mouseover", function () {
  boom.play();
});
button2.addEventListener("mouseover", function () {
  kick.play();
});
button3.addEventListener("mouseover", function () {
  snare.play();
});
