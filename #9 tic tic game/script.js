let boxs = document.querySelectorAll(".box")
let reset = document.querySelector(".reset")
let newgame= document.querySelector(".right")
let restart= document.querySelector(".restart")
let text=document.querySelector("#mas")
let turn = true;
const win = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
boxs.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("click");
        if (turn) {
            box.innerHTML = "0";
            turn = false;
        }
        else {
            box.innerHTML = "X";
            turn = true;
        }
        box.disabled = true

        
        checkwin();
    });
});
const dis=()=>{
    for(let box of boxs){
        box.disabled=true;
    }
}
const enable=()=>{
    for(let box of boxs){
        box.disabled=false;
        box.innerText="";
        newgame.classList.add("good");
    }
}
const show_win=(winner)=>{
    mas.innerText=`Congratulation , winner is : ${winner}`;
    newgame.classList.remove("good");
}
const checkwin = () => {
    for (pattern of win) {
        let pos1 = boxs[pattern[0]].innerText;
        let pos2 = boxs[pattern[1]].innerText;
        let pos3 = boxs[pattern[2]].innerText;
        if(pos1!=""&& pos2!=""&&pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("this is winner",pos1)
                dis(boxs)
                show_win(pos1);
            }
            
            
        }
        
       
    }
}
const regame=()=>{
turn=true;
enable();

}
restart.addEventListener("click",enable)
reset.addEventListener("click",enable)

