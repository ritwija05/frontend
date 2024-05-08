console.log("Welcome to Tic Tac Toe")
let music= new Audio("music.mp3")
let turn= new Audio("ting.mp3")
let gameeover= new Audio("gameover.mp3")
let turn ="X"
//function to change the turn
const changeTurn=()=>{
    return turn==="X"?turn="O":turn="X"
}

//function to check for a win
const checkWin = () => {
}
//game logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext =document.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText===''){
            boxtext.innertext = turn;
            changeTurn();
            audioTurn.play();
            checkWin();
            document.getElementsByClassName("turns")[0].innerText="Turn for"+ turn;

        }
    })
    })
