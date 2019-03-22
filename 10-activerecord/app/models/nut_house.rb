class NutHouse < ActiveRecord::Base
  belongs_to :tree
  belongs_to :squirrel
end
