const allKidsLink = `http://localhost:3000/api/v1/kids`
const chairKidLink = `http://localhost:3000/api/v1/kids/chair`
const voteKidLink = `http://localhost:3000/api/v1/kids/vote`
const throneKidLink = `http://localhost:3000/api/v1/kids/throne`

const dropKids = document.getElementById('kid-options')
const addKidButton = document.getElementById('add-kid')
const chairsContainer = document.getElementById('chairs-container')
const throne = document.getElementById('throne')

function placeKids(){
  fetch(allKidsLink)
  .then(res => res.json())
  .then(function(res){
    let kids = res.data
    //isn't necessary to make a variable, but helps with being explicit

    //we need to wipe the slate clean here before we re-render, or else we'll get duplicates!
    dropKids.innerHTML = ``
    chairsContainer.innerHTML = ``
    
    //should probably make this into a helper function:
    kids.forEach(kid => {
      if (kid.attributes['in-chair'] == false){
        dropKids.innerHTML += `<option id=${kid.id}-option value=${kid.id}>${kid.attributes.name}</option>`
      } else if (kid.attributes.throne){
        throne.innerHTML = `
        <img class="image" src=${kid.attributes['img-url']} />
        <br>
        <p>${kid.attributes.name}</p>
        `
      } else {
        chairsContainer.innerHTML += `
        <div id="${kid.id}-container" class="kid-chair-container">
          <img class="image" src=${kid.attributes['img-url']} />
          <br>
          <br>
          <div data-id=${kid.id} data-votes = ${kid.attributes.votes} class="attribute">
            ${kid.attributes.name}
            <br>
            Votes: ${kid.attributes.votes}
            <br>
            <a class="vote-down" href="#">Vote Down</a> | <a class="vote-up" href="#">Vote Up</a>
            <br>
            <a class="hide" href="#">Hide</a>
          </div>
        </div>`
      }
    })
  })
}

addKidButton.addEventListener('click', e => {
  fetch(chairKidLink, {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      kid_id: dropKids.value
    })
  })
  //not doing anything with the response, just want to check to see what the data looks like
  .then(res => {
    console.log("w/o json", res, "w/json", res.json())
  })
  .then(placeKids)

})

chairsContainer.addEventListener('click', function(e){
  e.preventDefault()
   if (e.target.className === "vote-up"){
     //helpful helper variable
     let currentVotes = e.target.parentElement.dataset.votes
     let kidId = e.target.parentElement.dataset.id
     if (currentVotes < "4"){
       fetch(voteKidLink, {
         method: "PATCH",
         headers: {
           'Content-Type': 'application/json',
           'Accept': 'application/json'
         },
         body: JSON.stringify({
           kid_id: kidId,
           vote: "up"
         })
       })
       //again, don't need res => res.json(), but helpful if you want to see the response yourself and confirm that the change was made
       .then(res => res.json())
       .then(placeKids)

     } else if (currentVotes == "4"){
       fetch(throneKidLink, {
         method: "PATCH",
         headers: {
           'Content-Type': 'application/json',
           'Accept': 'application/json'
         },
         body: JSON.stringify({
           kid_id: kidId
         })
       })
       .then(placeKids)
     }
   }
})

placeKids()
