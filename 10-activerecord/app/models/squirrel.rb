class Squirrel < ActiveRecord::Base
  has_many(:nut_houses)
  # SELECT * FROM "nut_houses" WHERE "nut_houses"."squirrel_id" = self.id


  # has_many(:trees, {:through => :nut_houses})
  has_many :trees, through: :nut_houses
  # SELECT * FROM "trees"
  # JOIN nut_houses
  # ON trees.id = nut_houses.tree_id
  # JOIN squirrels
  # ON squirrels.id = nut_houses.squirrel_id
  # WHERE nut_houses.squirrel_id = self.id


  def find_by_name(name)
    # self.all.find do |customer|
    #   customer.name == name
    # end
    Customer.find_by(name: name)
  end
end
