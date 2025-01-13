let timer = 0;
const counter = document.getElementById("counter");

const startTimer = () => {
  return setInterval(() => {
    timer++;
    counter.textContent = timer;
  }, 1000);
};

let intervalId = startTimer();

const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");

plusButton.addEventListener("click", () => {
  timer++;
  counter.textContent = timer;
});

minusButton.addEventListener("click", () => {
  timer--;
  counter.textContent = timer;
});

const likeButton = document.getElementById("heart");
const likesList = document.querySelector(".likes");
const likes = {};

likeButton.addEventListener("click", () => {
  if (!likes[timer]) {
    likes[timer] = 1;
    const li = document.createElement("li");
    li.dataset.num = timer;
    li.textContent = `${timer} has been liked 1 time.`;
    likesList.appendChild(li);
  } else {
    likes[timer]++;
    const li = document.querySelector(`[data-num="${timer}"]`);
    li.textContent = `${timer} has been liked ${likes[timer]} times.`;
  }
});

const pauseButton = document.getElementById("pause");

pauseButton.addEventListener("click", () => {
  if (pauseButton.textContent === "pause") {
    clearInterval(intervalId);
    pauseButton.textContent = "resume";
    plusButton.disabled = true;
    minusButton.disabled = true;
    likeButton.disabled = true;
  } else {
    intervalId = startTimer();
    pauseButton.textContent = "pause";
    plusButton.disabled = false;
    minusButton.disabled = false;
    likeButton.disabled = false;
  }
});

const commentForm = document.getElementById("comment-form");
const commentInput = document.getElementById("comment-input");
const commentList = document.getElementById("list");

commentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const comment = commentInput.value;
  const p = document.createElement("p");
  p.textContent = comment;
  commentList.appendChild(p);
  commentInput.value = ""; // Clear input box
});
