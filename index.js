const text = document.querySelector(".text");

// background

let mode = true;

let switchMode = () => {
  if (mode === true) {
    document.body.style.backgroundColor = "black";
    text.style.color = "white"
  } else {
    document.body.style.backgroundColor = "white";
    text.style.color = "black"
  }
  mode = !mode;
};

let background = () => {
  document.body.style.backgroundColor = prompt("Rang nomini kiriting");
};

// background

// text
let count = 40;
const increment = () => {
  if (count < 60) {
    count = count + 2;
    text.style.fontSize = count + "px";
  }
};

const resetText = () => {
  count = 40;
  text.style.fontSize = count + "px";
};

const decrement = () => {
  if (count > 44) {
    count = count - 2;
    text.style.fontSize = count + "px";
  }
}; 

// text
