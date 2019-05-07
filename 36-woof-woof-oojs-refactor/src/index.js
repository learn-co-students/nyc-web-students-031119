document.addEventListener('DOMContentLoaded', () => {
  let dogData = []
  const dogBar = document.querySelector('#dog-bar')
  const dogInfo = document.querySelector('#dog-info')
  const dogForm = document.querySelector('#dog-form')
  const dogNameInput = document.querySelector('#dog-name-input')
  const dogImgInput = document.querySelector('#dog-img-input')
  const goodDogInput = document.querySelector('#good-dog-input')

  fetch('http://localhost:3000/pups', { method: 'GET' })
    .then(/*function*/(resp) => resp.json())
    .then(/*function*/(dogDataJSON) => {
      dogData = dogDataJSON
      dogDataJSON.forEach(/*function*/(dog) => {
        dogBar.innerHTML += `<span data-id="${dog.id}">${dog.name}</span>`
      })
    })

    dogBar.addEventListener('click', (e) => {
      const clickedDogId = parseInt(e.target.dataset.id)
      const foundDog = dogData.find(/*function*/(dog) => dog.id === clickedDogId)
      const isGoodDogString = foundDog.isGoodDog ? 'Good Dog!' : 'Bad Dog!'
      dogInfo.innerHTML = `<img src="${foundDog.image}" >
                          <h2>${foundDog.name}</h2>
                          <button>${isGoodDogString}</button>
                          <button class="edit" data-id="${foundDog.id}" data-action="edit">Edit this Dog!</button>
                          `
    })

    dogInfo.addEventListener('click', (e) => {
      if (e.target.className === 'edit' || e.target.dataset.action === 'edit') {
        console.log(e.target)
        const clickedDogId = parseInt(e.target.dataset.id)
        const foundDog = dogData.find(/*function*/(dog) => dog.id === clickedDogId)
        dogNameInput.value = foundDog.name
        dogImgInput.value = foundDog.image
        goodDogInput.checked = foundDog.isGoodDog
        dogForm.dataset.id = foundDog.id
      }
    })

    dogForm.addEventListener('submit', (e) => {
      e.preventDefault()
      const updateDogId = e.target.dataset.id
      fetch(`http://localhost:3000/pups/${updateDogId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: dogNameInput.value,
          image: dogImgInput.value,
          isGoodDog: goodDogInput.checked
        })
      })
      .then((r) => r.json())
      .then((updatedDog) => {
        const dogDataIdx = dogData.findIndex((dog) => dog.id === updatedDog.id)
        dogData[dogDataIdx] = updatedDog
        const isGoodDogString = updatedDog.isGoodDog ? 'Good Dog!' : 'Bad Dog!'
        dogInfo.innerHTML = `<img src="${updatedDog.image}" >
                            <h2>${updatedDog.name}</h2>
                            <button>${isGoodDogString}</button>
                            <button class="edit" data-id="${updatedDog.id}" data-action="edit">Edit this Dog!</button>
                            `
      })
    })
})
