// Exercise 1 : Users

// const container = document.getElementById("container")
// console.log('container', container);
// document.querySelector(".list").children[1].textContent = "Richard"

// const names = document.querySelectorAll(".list")
// names.forEach( list => list.firstElementChild.textContent = "Teilah" )
// names[1].children[1].remove()
// names.forEach(list=> list.classList.add("student_list"))

// const ulOne = document.querySelector('ul.list.student_list')
// ulOne.classList.add("univercity", "attendance")



// Exercise 2 : Users And Style

// document.querySelector('body > div').style.backgroundColor = 'lightblue'
// document.querySelector("body > ul > li:nth-child(2)").style.border="2px solid red"

// const div = document.querySelector("div")
// console.log(div.style)

// const divBg = getComputedStyle(div).backgroundColor
// const users = document.querySelectorAll("li")


// if (divBg === "rgb(173, 216, 230") {
//     console.log("thi is lightblue");
//     console.log("Hello $(users[0].textContent) and $(users[0].textContent)!")
// }




// Exercise 3 : Change The Navbar

const navbar = document.getElementById("navBar")
console.log('navbar', navbar);

navbar?.setAttribute("id", "socialNetworkNavigation")

const li = document.createElement('li')
console.log('li', li);

const logout = document.createTextNode("Logout")
console.log('logout',logout);

li.appendChild(logout)
console.log('li', li);

const ul = navbar?.firstElementChild
ul?.appendChild(li)

const firstLi = ul?.firstElementChild
const lasttLi = ul?.lastElementChild

console.log('first li')
console.log(firstLi.textContent)

console.log('last li')
console.log(lasttLi.textContent)
