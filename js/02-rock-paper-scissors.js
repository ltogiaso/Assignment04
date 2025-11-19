const choiceArray = ["rock" , "paper", "scissors"];

const fGetUserChoice = () => {

    let strChoice, iChoice;
    let flag = 0;

    do {
         strChoice = window.prompt("Type one of the following as your choice [\"rock\" , \"paper\" , \"scissors\"]");
        if (strChoice === "rock"){
            iChoice = 0;
            flag = -1;
        }
        else if (strChoice === "paper"){
            iChoice = 1;
            flag = -1;
        }
        else if (strChoice === "scissors"){
            iChoice = 2;
            flag = -1;
        }
        else {
            window.alert("Please correctly enter your choice as one of the three provided in the prompt!");
        }
    } while (flag === 0);

    return iChoice;
}

const fGetComChoice = () => {

    let comChoice = Math.floor(Math.random() * 3);
    return comChoice;

}

const fCompareChoices = (firstPlayerChoice, secondPlayerChoice) => {

    if (firstPlayerChoice == secondPlayerChoice){
        return 0;
    }
    else if (firstPlayerChoice === 0) {
        if (secondPlayerChoice === 1){
            return 2;
        }
        else{
            return 1;
        }
    }
    else if (firstPlayerChoice === 1) {
        if (secondPlayerChoice === 2){
            return 2;
        }
        else{
            return 1;
        }
    }
    else {
        if (secondPlayerChoice === 0){
            return 2;
        }
        else{
            return 1;
        }
    }
}

const fWinnerDeclaration = (winner, userChoice, comChoice) => {

    window.alert("You chose: " + choiceArray[userChoice] + ". The computer chose: " + choiceArray[comChoice] + ".");
    if (winner === 1){

        window.alert("You have won!");
        return -1;
    }
    else if (winner === 2){
        window.alert("You lost. Computron has won!");
        return -1;
    }
    else {
        window.alert("It's a tie. Ewww. Choose again.")
        return 0;
    }

}

const fContinue = () => {

    let choice;
    let end = 0;

    do {
        choice = window.prompt("Would you like to play again? (1 for yes, 2 for no)");

        if (choice != "2" && choice != "1"){
            window.alert("Please correctly choose either 1 or 2.");
        }
        else {
            end = -1;
            return choice;
        }
    } while (end === 0);
}

let flag = 0;
let userChoice;
let comChoice;
let winner;

do {

    userChoice = fGetUserChoice();
    comChoice = fGetComChoice();
    winner = fCompareChoices(userChoice, comChoice);
    fWinnerDeclaration(winner, userChoice, comChoice);
    flag = fContinue();

} while (flag != 2);



