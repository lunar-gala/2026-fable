const doink = document.querySelectorAll(".gradient-vertical");
console.log(doink);

const maxDelay = 2;
for (let i = 0; i < doink.length; i++) {
  const randomDelay = Math.random() * maxDelay;
  doink[i].style.animationDelay = randomDelay + 's';
}
