class Issue < ApplicationRecord

  validates :desc, presence: true
  validates :severity, presence: true
  validates :severity, numericality: { greater_than_or_equal_to: 13 }
  validates :teen_id, presence: true


end
