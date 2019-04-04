class Jar < ActiveRecord::Base
  # but eventually... yes! relationships!
  has_many :cookies
  # some way to tell someone about a relationship
end
