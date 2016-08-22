class CitySerializer < ActiveModel::Serializer
  attributes :id, :name, :lat, :lng
end
