let boxes = document.querySelectorAll(".box");
let msg = document.querySelector(".announcement");
let reset = document.querySelector(".reset");

let turn_x = true;
let count = 9;

reset.addEventListener("click", () => {
  turn_x = true;
  count = 9;
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
  msg.classList.add("hide");
});

const winPositions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];


boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn_x) {
      box.innerText = "X";
      turn_x = false;
    } else {
      box.innerText = "O";
      turn_x = true;
    }
    box.disabled = true;
    checkWin();
    count--;

    if (count === 0) {
      // console.log("count is 0");
      msg.innerText = "Its a Tie";
      msg.classList.remove("hide");
    }
  });
});

const checkWin = () => {
  for (let val of winPositions) {
    let pos1 = boxes[val[0]].innerText;
    let pos2 = boxes[val[1]].innerText;
    let pos3 = boxes[val[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 == pos3) {
        msg.innerText = `"${pos1}"  Won the game`;
        msg.classList.remove("hide");
        boxes.forEach((box) => {
          box.disabled = true;
        });
      }
    }
  }
};
