// Exercise 1 

// const h1 = getFirstElement("h1")
// const h2 = getFirstElement("h2")
// const h3 = getFirstElement("h3")
// removeLastLine()
// addBtn()



// h2?.addEventListener("click", changeBackground)
// console.log('h2',h2);
// h3?.addEventListener("click", hideElement)

// function makeParagraphsBold(){
//     const paragraphs = document.querySelectorAll("p")
//     for (const paragraph of paragraphs){
        // console.log(paragraph);
//         paragraph.classList.add("bold")
//     }
// }

// function addBtn(){
//     const btn = document.createElement("button")
//     btn.textContent = "Make all bold"
//     btn.addEventListener("click", makeParagraphsBold)
//     const article = getFirstElement("article")
//     article.appendChild(btn)
// }

// function hideElement(){
//     h3.classList.add("hide")
// }


// function changeBackground(){
//    h2?.classList.add("red")
// }


// function removeLastLine(){
// const article = document.querySelector("article")
// article?.lastElementChild.remove()
// }

// function getFirstElement(selector) {
//     return document.querySelector(selector) 
// }




// Exercise 2 : Work With Forms

const form = document.querySelector("form");
const button = document.getElementById("submit");

function logFormInput(e){
    
    e.preventDefault();
    const firstName = document.querySelector("[name=fname]").value;
    const lastName = document.querySelector("[name=lname]").value;
    console.log(firstName,lastName);
    console.log("event", e);
}

button.addEventListener("click", logFormInput)
// console.log(form, firstName, lastName);
// logFormInput()