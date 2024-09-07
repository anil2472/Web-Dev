let boxes=document.querySelectorAll(".box");
let showWin=document.querySelector(".win");
let sowin=document.querySelector(".wincon");
let newG=document.querySelector(".Newbut");
let resG=document.querySelector(".resbut");
let winningchances=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

let turnO = true;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText="O";
            turnO = false;
        }
        else{
            box.innerText="X";
            turnO = true;
        }
        box.disabled=true; 
        checkwinner();
    }); 
});

let resetGame= ()=>{
    turnO=true;
    boxes.forEach((box) =>{
        box.innerText="";      
    })
    enabledbut();
}

let disabledbut=()=>{
    boxes.forEach((box) =>{
        box.disabled=true;
    });
};

let enabledbut=()=>{
    boxes.forEach((box) =>{
        box.disabled=false;
    });
    sowin.classList.add("hide");
};

let showWinner= (winnerr)=>{
    showWin.innerText=`congratulations, Winner is ${winnerr}`;
    sowin.classList.remove("hide");
    disabledbut();
}

let checkwinner=()=>{
    let num=checkcount();
    if(num==9){
        showWin.innerText="Draw";
        sowin.classList.remove("hide");
    }
    else{
   for(let idx of winningchances){
         let pos1=boxes[idx[0]].innerText;
         let pos2=boxes[idx[1]].innerText;
         let pos3=boxes[idx[2]].innerText;
        if(pos1!==""&&pos2!==""&&pos3!=="") {
            if(pos1===pos2&&pos2===pos3)
            showWinner(pos1);
        }
        
   }}
}

let checkcount=()=>{
    let count=0
    boxes.forEach((box) => {
        if(box.innerText=="X"||box.innerText=="O")
        count++;
    });
    return count;
}
newG.addEventListener("click",resetGame);
resG.addEventListener("click",resetGame);