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

// const form = document.querySelector("form");
// const button = document.getElementById("submit");

// function logFormInput(e){
    
//     e.preventDefault();
//     const firstName = document.querySelector("[name = firstname]").value;
//     const lastName = document.querySelector("[name = lastname]").value;
//     console.log(firstName,lastName);
//    if(firstName === "" || lastName === ""){
//     alert("pleas fill all fiealds")
//    } else{
//     const ul = document.querySelector(".usersAnswer")
//     const oneLi = document.createElement("li");
//     const twoeLi = document.createElement("li");
//     oneLi.innerText = firstName
//     twoeLi.innerText = lastName
//     ul.append(oneLi,twoeLi)
   
//    }
// }

// button.addEventListener("click", logFormInput)
// console.log(form, firstName, lastName);
// logFormInput()





// Exercise 3 : Transform The Sentence

let allBoldItems;
function getBoldItems(){
    allBoldItems = document.getElementsByName("strong");
}

function highlight(){
    getBoldItems();
    for (const boldItem of allBoldItems){
        boldItem.style.color = "red";
    }
}

function returnBack(){
    getBoldItems();
    for (const item of allBoldItems){
        item.style.color = "black"
    }
}