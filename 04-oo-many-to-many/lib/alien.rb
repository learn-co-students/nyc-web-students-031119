class Alien
  attr_reader :name

  def initialize(name)
    @name = name
  end

  def colonize_planet(planet)
    Colony.new(planet, self)
  end

  def colonies
    # Go ask the Colony model a question
    # which colonies belong to myself
    Colony.all.select do |colony|
      colony.alien == self
    end
  end

  def planets
    # TODO: this mehtod should return an array of Planet instances
    # that this alien has colonies on

    
  end

end
