class Dog {
  // `static` creates a 'class' method; Dog.methodName()
  static findDog(id) {
    return this.allDogs.find((dog) => dog.id === id) //`this` will be Dog when invoked like -> Dog.findDog(1)
  }

  static updateDog(updatedDogData) {
    const pupToUpdate = this.findDog(updatedDogData.id) // if we invoke Dog.updateDog(newDogJSON), `this` will be Dog class
    pupToUpdate.name = updatedDogData.name
    pupToUpdate.image = updatedDogData.image
    pupToUpdate.isGoodDog = updatedDogData.isGoodDog
    return pupToUpdate //return the updated dog instance for method chaining; pupToUpdate.renderDetails() etc
  }

  constructor(dogDataObj) {
    this.id = dogDataObj.id
    this.name = dogDataObj.name
    this.image = dogDataObj.image
    this.isGoodDog = dogDataObj.isGoodDog
    Dog.allDogs.push(this)
  }

  renderSpan() {
    return `<span data-id="${this.id}">${this.name}</span>`
  }

  renderDetails() {
    const isGoodDogString = this.isGoodDog ? 'Good Dog!' : 'Bad Dog!'
    return `<img src="${this.image}" >
          <h2>${this.name}</h2>
          <button>${isGoodDogString}</button>
          <button class="edit" data-id="${this.id}" data-action="edit">Edit this Dog!</button>
          `

  }
}

Dog.allDogs = [] //recall that an ES6 'class' is just a function. functions are also objects (Object is part of their prototype chain). therefore, we can set key/value pairs on a function just like we can on any other object
