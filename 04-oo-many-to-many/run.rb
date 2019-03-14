require 'pry'
require_relative './lib/alien'
require_relative './lib/planet'
require_relative './lib/colony'



# Aliens
# alien has many colonies
# alien has many planets through colonies
#
humans = Alien.new('humans')
zorplings = Alien.new('Zorplings')
martians = Alien.new('martians')

# Planets
# planet has many colonies
# planet has many aliens through colonies
#
earth = Planet.new('earth')
mars = Planet.new('mars')
venus = Planet.new('venus')

# Colony
# colony belongs to alien
# colony belongs to planet

humans.colonize_planet(earth)
zorplings.colonize_planet(earth)
martians.colonize_planet(mars)
humans.colonize_planet(mars)
# Colony.new(earth, humans)
# Colony.new(earth, zorplings)
# Colony.new(mars, martians)
# Colony.new(mars, humans)
# Colony.new(venus, zorplings)

binding.pry
