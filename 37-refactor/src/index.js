document.addEventListener('DOMContentLoaded', () => {
	let allPokemon = []
	const pokemonContainer = document.getElementById("pokemon-container")
	const searchBar = document.getElementById("pokemon-search-input")


	function fetchPokemon(){
		fetch("http://localhost:3000/pokemon", {method: "GET"})
		.then(     function(response) {
			return response.json()
		})
		.then(    (data) => {
			   allPokemon = data

			   showAllPokemon(data)
		})
	}


// CREATE A NEW POKEMON
// 1. Grab all the inputs and save it into a variable

// 2. Listen to the "submit" form
	//GRAB THAT FORM
	const newPokeForm = document.getElementById('new-pokemon-form')
	newPokeForm.addEventListener("submit", function(e) {
		const newPokeName = document.getElementById('new-poke-name').value
		const newPokeFront = document.getElementById('new-poke-front-sprite').value
		const newPokeBack = document.getElementById('new-poke-back-sprite').value
		console.log(newPokeName, newPokeFront, newPokeBack)
		// 3. STOP the form from doing that full page refresh nonsense
		e.preventDefault()
		// 4. SEND the data i just grabbed (pppst step 1) send it to the server

		// OPTIMISIC RENDERING  NO GUARANTEE DB is updated
		// update the DOM
		fetch("http://localhost:3000/pokemon", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			},
			body: JSON.stringify({
				name: newPokeName,
				sprites: {
					"front": newPokeFront,
					"back": newPokeBack
				}
			})
		})
		.then( function(response) {
			return response.json()
		})
		.then(function(pokemon){
			// inside the .then MEANS I have RESOLVED the promise
			// RETURNED SOME DATA
			// PESSIMISTIC RENDERING

			// 1. UPDATE THE DATABASE
			// 2. UPDATE THE DOM
			// 3. UPDATE ANY LOCAL VARIABLES
			allPokemon.push(pokemon)
			pokemonContainer.innerHTML += renderSinglePokemon(pokemon)
			// showAllPokemon(allPokemon)
		})

	})





	function showAllPokemon(pokemons){
		pokemonContainer.innerHTML = pokemons.map(renderSinglePokemon).join('')
	}

	pokemonContainer.addEventListener("submit", (e) => {
		e.preventDefault()
		console.log(e.target, "on submit")
		const oldPokemon = allPokemon.find(function(pokemon) {
			return pokemon.id === parseInt(e.target.dataset.id)
		})
		const oldPokeIndex = allPokemon.indexOf(oldPokemon)
		console.log(oldPokeIndex, 'found it!')

		if (e.target.id === "edit-pokemon-form") {
			const editNameInput = e.target.querySelector("#edit-poke-name").value
			const editFrontInput = e.target.querySelector("#edit-poke-front-sprite").value
			const editBackInput = e.target.querySelector("#edit-poke-back-sprite").value

			fetch(`http://localhost:3000/pokemon/${e.target.dataset.id}`,{
				method: "PATCH",
				headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
				body: JSON.stringify({
					name: editNameInput,
					sprites: {
						"front": editFrontInput,
						"back": editBackInput
					}
				})
			})
			.then(function(res) {
				return res.json()
			})
			.then(function(pokemon){
				// UPDATED THE DB!! ✔️✅ THANKS FETCH
				// UPDATE THE DOM
					// RERENDER with updated data
					// FIND the pokemon in my local data

					// UPDATE the local data (allPokemon)
					// RE RENDER with the new data
				// UPDATE LOCAL VARIABLES
			allPokemon[oldPokeIndex] = pokemon
			showAllPokemon(allPokemon)
			})
		}
	})

	pokemonContainer.addEventListener("click", (e) => {
		if (e.target.tagName === "IMG") {
			const foundPokemon = allPokemon.find(function(pokemon) {
				return pokemon.id === parseInt(e.target.dataset.id)
			})

			if (e.target.src === foundPokemon.sprites.front) {
				e.target.src = foundPokemon.sprites.back
			} else {
				e.target.src = foundPokemon.sprites.front
			}
		}

		if (e.target.dataset.action === "edit") {
			console.log(e.target)
			e.target.innerHTML += `
				<form class="form" data-id="${e.target.dataset.id}" id="edit-pokemon-form" action="index.html" method="post">
					<label for="name">Name: </label>
					<input id="edit-poke-name" type="text" name="name" value="">

					<label for="front-sprite">Front Image: </label>
					<input id="edit-poke-front-sprite" type="text" name="front-sprite" value="">

					<label for="back-sprite">Back Sprite: </label>
					<input id="edit-poke-back-sprite" type="text" name="back-sprite" value="">

					<button type="submit" name="button">Edit That Pokemon!</button>
				</form>

			`
		}
		if (e.target.dataset.action === "delete") {


			fetch(`http://localhost:3000/pokemon/${e.target.dataset.id}`,{
				method: "DELETE"
			}
			.then(
				// remove from DOM
				// UPDATE LOCAL VARIABLES
				// find the pokemon remove from allPokemon
			)
		}
	})

	searchBar.addEventListener("input", (e) => {
		const filteredPokemon = allPokemon.filter((pokemon) => {
			return pokemon.name.includes(e.target.value)
		})
		showAllPokemon(filteredPokemon)
	})

	function renderSinglePokemon(pokemon) {
		return `
			<div data-id="${pokemon.id}"class="pokemon-container">
				<div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
					<h1 class="center-text">${pokemon.name}</h1>
					<div style="width:239px;margin:auto">
						<div style="width:96px;margin:auto">
							<img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
						</div>
						<button data-id="${pokemon.id}" data-action="edit"> edit </button>
						<button data-id="${pokemon.id}" data-action="delete"> deleterize </button>
					</div>
				</div>
			</div>
		`
	}

	// Make a pokemon editable
		// Add an edit button
	// the buttons dont do nuffin
	// make the buttons work
	 	//  make the edit button LISTEN for 'click'
		// gotta get that button first!

		// add (append) a new edit form to the pokemon card

		// need that new edit form to do something
		//  👂 LISTEN for 'submit' of THE BRAND NEW EDIT FORM I JUST MADE
	// grab those inputs!
// NO TO FULL PAGE RELOAD! e.preventDefault()
// fetch req WITH a patch 🙌


	fetchPokemon()
})
