let toggle = document.querySelector(".menu-toggle");
let menu = document.querySelector(".toggle");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active1");
});
// ------------------------------------------

let spanText = document.querySelector(".landing .container span");
let text = ["أسهل", "أسرع", "أفضل"];
let index = 0;

function updateText() {
  spanText.innerHTML = text[index];
  index++;
  if (index == text.length) {
    index = 0;
  }
  setTimeout(updateText, 1000);
}

updateText();
// ------------------------------------------

let answers = document.querySelectorAll(".answers .container .answer .content");
answers.forEach((item, index) => {
  let header = item.querySelector(".content header");
  let imgh = item.querySelector("header img");
  let desc = item.querySelector(".content p");
  header.addEventListener("click", () => {
    item.classList.toggle("active");
    if (item.classList.contains("active")) {
      desc.style.cssText = "display : block;";
      imgh.src = "imgs/minus.png";
    } else {
      desc.style.display = "none";
      imgh.src = "imgs/plus.png";
    }
  });
});

// ------------------------------------------

let upToTop = document.querySelector(".up");

upToTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
