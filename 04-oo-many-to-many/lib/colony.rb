class Colony
  attr_reader :planet, :alien
  @@all = []

  def initialize(planet, alien)
    @planet = planet
    @alien = alien
    @@all << self
  end

  def self.all
    @@all
  end

end
