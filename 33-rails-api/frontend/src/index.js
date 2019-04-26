document.addEventListener("DOMContentLoaded", () => {

  const table = document.querySelector('table')
  // {
    // id: 1,
    // name: "PA Rivers",
    // species_id: 4,
    // diet: "carnivore",
    // created_at: "2019-04-26T13:48:29.472Z", 
    // …}
  const createAnimalRow = (animal) => {
    const tr = document.createElement('tr')

    tr.innerHTML = `
    <td>${animal.name}</td>
    <td>${animal.species_id}</td>
    <td>${animal.diet}</td>
    `

    return tr
  }

  fetch("http://localhost:3000/animals")
    .then(res => res.json())
    .then(animals => {
      console.log('response is', animals);
      // <tr>
        // <td>Belinda</td>
        // <td>2</td>
        // <td>Herbivore</td>
      // </tr>
      // const firstAnimal = animals[0]
      animals.forEach(animal => {
        table.appendChild(createAnimalRow(animal))
      })


  })

  // grab the form
  const form = document.querySelector('.ui form')

  //grab the inputs
  const nameInput = document.querySelector("#animal-name")
  const speciesInput = document.querySelector("#animal-species")
  const dietInput = document.querySelector("#diet-input")
  console.dir(dietInput)

  // dietInput.options[dietInput.selectedIndex].value

  // var strUser = e.options[e.selectedIndex].value;


  form.addEventListener('submit', function(e){
    // because we are PREVENTING form from submitting
    e.preventDefault()
    // send our own network request
    fetch('http://localhost:3000/animals', {
      method: "POST",
      headers: {
           "Content-Type": "application/json",
           "Accept": "application/json"
       },
      body: JSON.stringify({
        name: nameInput.value,
        species_id: speciesInput.value,
        diet: dietInput.options[dietInput.selectedIndex].value
      })
    })
    .then(res => res.json())
    .then(animalObj => {
      // add it here
      // pessimistic rendering
      // knowing for sure the fetch succeeded THEN slappin' on da DOM
      // GUARENTEE it done happened
      // but slower
      table.appendChild(createAnimalRow(animalObj))
    })

    form.reset()
    // optimistic rendering
    // add it to the DOM
    // MUY faster
    // kinda sketch not sure server was updated


  })


})
