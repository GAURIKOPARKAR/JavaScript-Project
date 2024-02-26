let boxes = document.querySelectorAll(".box");
let msg = document.querySelector(".announcement");
let reset = document.querySelector(".reset");

let turn_x = true;
let count = 9;
let arr = [0,1,2,3,4,5,6,7,8]

reset.addEventListener("click", () => {
  turn_x = true;
  count = 9;
  let arr = [0,1,2,3,4,5,6,7,8]
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


boxes.forEach((box,index) => {
  box.addEventListener("click", () => {
    // if (turn_x) {
    //   box.innerText = "X";
    //   turn_x = false;
    // } else {
    //   box.innerText = "O";
    //   turn_x = true;
    // }
    box.innerText = "X";
    // console.log(index)
    box.disabled = true;
    count--;
    checkWin();

    setTimeout(systemTurn(index),10000)

    
   
  });
});

// const systemTurn = (doneindex)=>{
//   arr = arr.filter(num => num!==doneindex)
//  let randomindex = Math.floor(Math.random()*arr.length)
// //  console.log(arr[randomindex])
//  boxes[arr[randomindex]].innerText = "O"
//  arr = arr.filter(num => num!==arr[randomindex])
//  console.log(arr)
//  count--;
//  checkWin();
// }

const systemTurn = (doneIndex) => {
  // Filter out the clicked index from the array
  arr = arr.filter(num => num !== doneIndex);

  // Generate a random index from the updated array
  let randomIndex = Math.floor(Math.random() * arr.length);

  // Retrieve the actual index from the array
  let boxIndex = arr[randomIndex];

  // Set the text of the box at the selected index to "O"
  boxes[boxIndex].innerText = "O";

  // Remove the selected index from the array
  arr.splice(randomIndex, 1);

  count--;
  checkWin();
};


const checkWin = () => {
  for (let val of winPositions) {
    let pos1 = boxes[val[0]].innerText;
    let pos2 = boxes[val[1]].innerText;
    let pos3 = boxes[val[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (count === 0) {
        // console.log("count is 0");
        msg.innerText = "Its a Tie";
        msg.classList.remove("hide");
      }else
      if (pos1 === pos2 && pos2 == pos3) {
        msg.innerText = `"${pos1}"  Won the game`;
        msg.classList.remove("hide");
        count = 9;
        boxes.forEach((box) => {
          box.disabled = true;
        });
      }
    }
  }
};
