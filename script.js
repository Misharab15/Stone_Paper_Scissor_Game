let userScore = 0;
let compScore = 0;

const US = document.querySelector("#userScores"); 
const CS = document.querySelector("#compScores");
const MW = document.querySelector("#msg");

const btnSelect = document.querySelectorAll(".image");
btnSelect.forEach((image) =>{
   image.addEventListener("click", () => {
        const userChoice = image.getAttribute("id");
        game(userChoice);
    });
});

const genRandComp = () => {
    const arr = ["rock", "paper", "scissors"];
    const rand = Math.floor(Math.random() * 3);
    return arr[rand];
};

const game = (userChoice) => {
    console.log("User Choice =", userChoice);
    const compChoice = genRandComp();

    console.log("Comp Choice =", compChoice);
    if(compChoice === userChoice){
        drawFunc();
    } else {
        compare(userChoice, compChoice);
    };


};

const drawFunc = () => {
    console.log("Game was drawn");
    MW.innerText = "Game was drawn. Try Again!";
    MW.style.backgroundColor = "#081b31";
};

const compare = (userChoice, compChoice) => {
    let userWin = true;
    if(userChoice === "rock"){   //paper,scissor
        userWin = compChoice === "paper" ? false: true;
    } else if(userChoice === "paper"){    //rock, scissor
        userWin = compChoice === "rock" ? true : false;
    } else if(userChoice === "scissors"){  // rock, paper
        userWin = compChoice === "rock" ? false : true;
    };
    console.log(userWin);
    alterNum(userWin, userChoice, compChoice);
};


const alterNum = (userWin, userChoice, compChoice) => {
    if(userWin){
        console.log("You Win");
        userScore++;
        US.innerText = userScore;
        MW.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        MW.style.backgroundColor = "green";
        if(userScore == 10 && compScore < 10){
            const lastMsg1 = userScore - compScore;
            MW.innerText = `You won by ${lastMsg1} points.`;
            MW.style.backgroundColor = "green";
        } else if(compScore == 10 && userScore <10){
            const lastMsg2 = compScore - userScore;
            MW.innerText = `You lost by ${lastMsg2} points.`;
            MW.style.backgroundColor = "red";
        };

    } else {
        console.log("You lose");
        compScore++;
        CS.innerText = compScore;
        MW.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
        MW.style.backgroundColor = "red";
        if(userScore == 10 && compScore < 10){
            const lastMsg1 = userScore - compScore;
            MW.innerText = `You won by ${lastMsg1} points.`;
            MW.style.backgroundColor = "green";
        } else if(compScore == 10 && userScore <10){
            const lastMsg2 = compScore - userScore;
            MW.innerText = `You lost by ${lastMsg2} points.`;
            MW.style.backgroundColor = "red";
        };
    };
}

let btn = document.querySelector("button");
let currMode = "light";
btn.addEventListener("click", () => {
    if(currMode === "light"){
        currMode = "dark";
        document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("light");
    } else {
        currMode = "light";
        document.querySelector("body").classList.add("light");
        document.querySelector("body").classList.remove("dark");
    }
})




