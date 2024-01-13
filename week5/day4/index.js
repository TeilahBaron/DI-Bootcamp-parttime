// Exercise 1: Timer


// setTimeout(alertHello,2000)
// setTimeout(addParagraph,2000)
// const interval = setInterval(addParagraph, 2000)

// function alertHello(){
//     alert("Hello world!")
// }

// function addParagraph(){
//     const p = document.createElement("p")
//     p.textContent = "Hello World"
//     const container = document.getElementById("container")
//     if (container?.children.length < 5){
//         container?.appendChild(p)
//     } else{
//         clearParagraphInterval()
//     }
// }

// const button = document.getElementById("clear")
// button?.addEventListener("click", clearParagraphInterval)

// function clearParagraphInterval(){
//     clearInterval(interval)
// }



// Exercise 2 : Move The Box
// let distance = 0
// let interval

// function myMove(){
//    setInterval(moveRedSquare,1)
// }

// function moveRedSquare(){
//     if (distance === 350) {
//        clearInterval(interval) 
//        return
//     } 
//     distance = distance + 1
//     const redSquare = document.getElementById("animate")
//     redSquare.style.left = distance + "px"
// }


// Exercise 3: Drag & Drop

const yellowBox = document.getElementById("target");
yellowBox.addEventListener("drop",handleDrop);
yellowBox?.addEventListener("dragover", allowDrop);


function allowDrop(event){
    event.preventDefault();
    console.log("event",event);
    yellowBox.classList.add("is-hovered")
}

function handleDrop(event){
    console.log("handleDrop:");
    yellowBox.classList.remove("is-hovered")
    yellowBox.append(box);
}