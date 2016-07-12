class Flight < ApplicationRecord
  validates :from_city_id, :to_city_id, presence: true

  has_many :tickets
  belongs_to :from_city,
    class_name: :City
  belongs_to :to_city,
    class_name: :City
end
