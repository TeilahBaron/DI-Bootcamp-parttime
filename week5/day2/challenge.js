const button = getButton()
button?.addEventListener("click", handleClick)




function handleClick(e){
    e.preventDefault()
    const noun = document.getElementById("noun").value
    const adjective = document.getElementById("adjective").value
    const person = document.getElementById("person").value
    const verb = document.getElementById("verb").value
    const place = document.getElementById("place").value

    if ( noun == "" || adjective == "" || person == "" || verb == "" || place == "") return
    // console.log("inside forms", noun, adjective, person, verb, place );

    const story = allStory(noun,adjective,person,verb,place)
    console.log(story);

    appendStory(story)
}

function appendStory(story){
    const paragraph = document.getElementById("story")
    const span = document.createElement("span")
    span.innerText = story
    paragraph?.appendChild(span)
}

function allStory(noun,adjective,person,verb,place) {
   return `I like to look at ${noun}s, I that it is ${adjective}. My person is ${person}. We ${verb} and we are in ${place}`

}
function getButton(){
    return document.getElementById("lib-button")
}
