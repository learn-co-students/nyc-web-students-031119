class Animal < ApplicationRecord
  belongs_to :species
  enum diet: [:carnivore, :herbivore, :omnivore]
end
