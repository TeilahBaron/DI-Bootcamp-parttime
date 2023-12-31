const planets = ["Mercury", "Venus", "Earth", "Mars","Jupiter","Saturn", "Uranus", "Neptune"]

for (const planet of planets) {
console.log('planet', planet);
const div = document.createElement("div")
div.classList.add("planet")
div.classList.add(planet.toLocaleLowerCase())
// console.log("div", div);
const section = document.querySelector(".listPlanets")
section?.appendChild(div)
}