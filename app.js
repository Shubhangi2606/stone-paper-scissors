let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const gencompchoice = () => {
    const options = ["rock", "scissors ", "paper"];
    const randIdx = Math.floor(Math.random () * 3);
    return options [randIdx];
};
const drawGame = () => {
    msg.innerText = "Game was draw. play again.";
    msg.style.backgroundcolor = "green";
};

const showWinner = (userWin, userchoice, compchoice) => {
    if(userWin) {
        userscore++;
        userScorepara.innerText = userscore;
        msg.innerText = "you win";
        msg.style.backgroundcolor = "green";

    } else {
        compscore++;
        compScorepara.innerText = compscore;
        msg.innerText = "you lose.";
        msg.style.backgroundcolor = "red";
    }

}

const playgame = (Userchoice) => {
    console.log("User choice = " , Userchoice)
    const compchoice =  gencompchoice ();
    console.log("comp choice = " , compchoice);

    if(Userchoice === compchoice) {
        //Draw game
        drawGame();
 } else{
    let userWin = true;
    if(Userchoice === "rock") {
        userWin = compchoice === "paper" ? false : true;
    } else if(Userchoice === "paper") {
        userWin = compchoice === "scissors" ? false : true;
    } else {
        userWin = compchoice === "rock" ? false : true;
    }
    showWinner(userWin, Userchoice, compchoice);

 }

};




choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",  () => {
        console.log("choice was clicked");
        const Userchoice = choice.getAttribute("id");
        playgame(Userchoice);

    });
});