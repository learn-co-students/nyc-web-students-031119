class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
  # why did they add this one extra lefvel of abstraction?
  # what if you wanted to share code between models?
  # put stuff here
end
