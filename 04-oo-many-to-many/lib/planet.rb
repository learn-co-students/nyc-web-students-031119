class Planet
  attr_reader :name

  def initialize(name)
    @name = name
  end

  def colonies
    # Go ask the Colony model a question
    # which colonies belong to myself
    Colony.all.select do |colony|
      colony.planet == self
    end
  end

  def aliens
    # TODO: this mehtod should return an array of Planet instances
    # that this alien has colonies on
    # look through all of my colonies
    # find the Alien instance associated with each
    self.colonies.map do |colony|
      colony.alien
    end
  end

end
