document.addEventListener("DOMContentLoaded", () => {
  console.log('loaded');
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

  console.log('after the fetch');


})
