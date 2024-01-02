function playTheGame(){
    const userAnswer = confirm("wanna play?")
    if (!userAnswer){
        alert("No problem, Goodbye")
        return
    }
   const answer = prompt("Enter number")
   if (!justNumbers(Number(answer))){
    alert("It's not a number,Goodbye")
    return
   }

   if (!zeroOrTen(answer)){
    alert("Sorry bad number,bye")
   }

    console.log("play the game");
}


function justNumbers(str) {
    const regex = new RegExp(/^[0-9]*$/)
    return regex.test(str)
}

function zeroOrTen(number){
    return number >= 0 && number <= 10
}