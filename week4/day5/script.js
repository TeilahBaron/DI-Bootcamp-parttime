let numberOfBeers = Number(prompt("how many beers?"));
let numberOfBeersToTake = 1;


while (numberOfBeers>0) {
    const strofa = makeStrofa(numberOfBeers,numberOfBeersToTake);
    console.log(strofa);
    numberOfBeers -= numberOfBeersToTake;
    numberOfBeersToTake ++;

}


function makeStrofa(num,counter){
 console.log("the number more than one?", isPlural(num));
 const bottleOrBottles = getBottleOrBottles(num);
 const strofa =  `${num} ${bottleOrBottles} of beer on the wall
 ${num} ${bottleOrBottles} of beer
 Take ${counter} down, pass it around
 ${num - counter} ${getBottleOrBottles(num - counter)} of beer on the wall`;

 return strofa;
}

function isPlural(num) {
    return num > 1;
   
}

function getBottleOrBottles(num){
    if(isPlural(num)){
        return "bottles"
    }
    else{
        return "bottle"
    }
}

// console.log(strofa);