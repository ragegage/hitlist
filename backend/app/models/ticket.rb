class Ticket < ApplicationRecord
  validates :user_id, :flight_id, presence: true

  belongs_to :user
  belongs_to :flight
end
