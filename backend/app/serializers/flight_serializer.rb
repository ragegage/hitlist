class FlightSerializer < ActiveModel::Serializer
  attributes :id, :from_city_id, :to_city_id
end
