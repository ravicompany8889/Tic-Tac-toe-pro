let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let  msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

  let turnO = true;//playerX, playerO

  //using 2d array

  const winPattern = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    [0, 4, 8, 12],
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],
    [0, 5, 10, 15],
    [3, 6, 9, 12]
];

 const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
 }

  const eventBox = (box) => {
       
    if(turnO) {  //playerO        //turno === true; it can write there..
        box.innerText = "O";
        turnO = false;
    } else {  //playerX
        box.innerText = "X";
        turnO = true; 
    }
    box.disabled = true;   //box par doubal click karne par
                           //ab change nahi hoga Pahle hota tha x se y, y se x
    checkWinner();
}

boxes.forEach((box) => {
    box.addEventListener("click", () => eventBox(box) ); 
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled= true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled= false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerHTML = "<b>Congratulations</b>, winner is   " +  winner;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner = () => {  // aero function
      for( let pattern of winPattern) {
            let pos1val = boxes[pattern[0]].innerText;
            let pos2val = boxes[pattern[1]].innerText;
            let pos3val = boxes[pattern[2]].innerText;
            let pos4val = boxes[pattern[3]].innerText;
            

            if (pos1val != "" && pos2val != "" && pos3val != "" && pos4val != "") {
                if(pos1val === pos2val && pos2val === pos3val && pos3val === pos4val) {
                    
                    showWinner(pos1val);

                }
            }
      }
};

 newGameBtn.addEventListener("click", resetGame);
 resetBtn.addEventListener("click", resetGame);