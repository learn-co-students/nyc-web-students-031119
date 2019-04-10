class Dumpster < ApplicationRecord
  has_many :garbage_items, dependent: :destroy

  validates :nickname, presence: true
  validates :cubic_feet, numericality: {greater_than: 0}
  validate :is_day_of_week

  def is_day_of_week
    days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    if days.include?(self.pick_up.capitalize) == false
      errors.add(:pick_up, "Must be a weekday")
    end
  end

end
