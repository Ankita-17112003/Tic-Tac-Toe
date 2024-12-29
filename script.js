let boxes =document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newbtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let drawbtn =document.querySelector(".draw");

let turno = true;

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame=()=>{
    turno = true;
    enabledboxes();
    msgContainer.classList.add("hide")
};

const drawGame=()=>{
    turno = true;
    enabledboxes();
    draw.classList.add("hide");

}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (turno==true) {
            box.innerText="O";
            turno=false;
            box.style.backgroundColor="#C5005B";
            
        }
        else{
            box.innerText="X";
            turno=true;
            box.style.backgroundColor="#129BA5";
            
        }
        box.disabled=true;
        checkWinner();
    });

});

let disabledboxes=()=>{
    for(box of boxes){
        box.disabled=true;
    }
};

let enabledboxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
        box.style.backgroundColor="white";

    }
};
const count=()=>{
    for(box of boxes){
        if(turn===9){
            draw.innerText=("it's a draw");
            draw.classList.remove("hide")


        }
    }
}


const showWinner =(winner)=>{
    msg.innerText=`congratulations, Winner is ${winner} `;
    msgContainer.classList.remove("hide");
    disabledboxes();
    msg.style.fontWeight="bolder";
    msg.style.color="white"

};

const checkWinner=()=>{
    for(let Pattern of winPattern){
        
        let pos1Val =boxes[Pattern[0]].innerText;
        let pos2Val =boxes[Pattern[1]].innerText;
        let pos3Val =boxes[Pattern[2]].innerText;

        if (pos1Val !="" && pos2Val !="" && pos3Val !="") {
            if (pos1Val===pos2Val && pos2Val===pos3Val) {
                showWinner(pos1Val);               
                
            }            
        }           
    }        
    };
    newbtn.addEventListener("click",resetGame);
    resetbtn.addEventListener("click",resetGame);
    drawbtn.addEventListener("click",drawGame);

