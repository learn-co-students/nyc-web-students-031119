class Owner
  ALL = []

  attr_accessor :name, :pets
  attr_reader :species

  def initialize(name)
    @name = name
    @species = 'human'
    @pets = {
      dogs: [],
      cats: [],
      fishes: []
    }
    ALL << self
  end

  def self.all
    ALL
  end

  def self.count
    ALL.length
  end

  def self.reset_all
    ALL.clear
  end

  def say_species
    "I am a #{self.species}."
  end

  def buy_fish(fish)
    self.pets[:fishes] << Fish.new(fish)
  end

  def buy_cat(cat)
    self.pets[:cats] << Cat.new(cat)
  end

  def buy_dog(dog)
    self.pets[:dogs] << Dog.new(dog)
  end

  def walk_dogs
    self.pets[:dogs].each do |dog|
      dog.mood = 'happy'
    end
  end

  def play_with_cats
    self.pets[:cats].each do |cat|
      cat.mood = 'happy'
    end
  end

  def feed_fish
    self.pets[:fishes].each do |fish|
      fish.mood = 'happy'
    end
  end

  def sell_pets
    self.pets.each do |type, pets|
      pets.each do |pet|
        pet.mood = 'nervous'
      end
      pets.clear
    end
  end

  def list_pets
    "I have #{pets[:fishes].length} fish, #{pets[:dogs].length} dog(s), and #{pets[:cats].length} cat(s)."
  end

end
