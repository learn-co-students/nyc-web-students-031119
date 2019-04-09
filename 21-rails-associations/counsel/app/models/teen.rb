class Teen < ApplicationRecord

  validate :must_be_teen

  def must_be_teen
    if self.age < 13 
      errors.add(:age, "must be 13 to 19")
    end
  end
end
