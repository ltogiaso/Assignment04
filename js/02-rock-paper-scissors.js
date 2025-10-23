const fGetUserChoice = function (){

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
};

const fGetComChoice = function(){

    let comChoice = Math.floor(Math.random() * 3);
    return comChoice;

};

const fCompareChoices = function(firstPlayerChoice, secondPlayerChoice) {

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
};

let flag = 0;
let userChoice;
let comChoice;
let winner;

do {

    userChoice = fGetUserChoice();
    comChoice = fGetComChoice();
    winner = fCompareChoices(userChoice, comChoice);

    
    
    console.log("User choice: " + userChoice);
    console.log("Com choice: " + comChoice);

    flag = -1;
} while (flag != -1);



