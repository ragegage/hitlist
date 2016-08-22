class City < ApplicationRecord
  validates :name, :lat, :lng, presence: true

  has_many :flights
end
