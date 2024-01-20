let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-Score")
const compScorePara = document.querySelector("#comp-Score")

const genCompChoice = () => {
const options = ["rock", "paper", "scissors"]
const randidx =  Math.floor(Math.random() * 3)
return options[randidx]
}

const drawGame = () =>
{
    console.log("the gane was a Draw ")
    msg.style.backgroundColor = "#2A2C24"
}

const showWinner = (userWin , userChoice, compchoice) => 
{
if(userWin)
{
    console.log("you win")
    userScore++
    userScorePara.innerText = userScore
    msg.innerText = `You win! Your ${userChoice} Defeats A.i's ${compchoice}`
    msg.style.backgroundColor = "#3BB273"
}
else
{
    console.log("you lose")
    compScore++
    compScorePara.innerText = compScore
    msg.innerText = `You lose! A.i's ${compchoice} Defeats Your ${userChoice}`
    msg.style.backgroundColor = "#F02D3A"
}
}

const playGame = (userChoice) => {
console.log("user Choice = ", userChoice)
//generate computer choice
const compchoice = genCompChoice()
console.log("comp choice = ", compchoice)


if(userChoice === compchoice)
{
drawGame()
msg.innerText = "Game was Draw!"
}
else
  {
    let userWin = true
    if(userChoice === "rock")
    { //scissors, paper
       userWin = compchoice === "paper" ? false : true
    }
    else if(userChoice === "paper"){
        //rock, scossir
 userWin = compchoice === "scissors" ? false : true
    } else {
        //rock, paper
        userWin = compchoice === "rock" ? false : true
    }
    showWinner(userWin ,userChoice , compchoice)
 }

}

choices.forEach((choice) => {
    console.log(choice)
    choice.addEventListener("click", () => {
        const choiceid = choice.getAttribute("id")
        console.log("choice was clicked", choiceid)
        playGame(choiceid)
    })
});