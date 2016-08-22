class AddLatLngToCities < ActiveRecord::Migration[5.0]
  def change
    add_column :cities, :lat, :integer
    add_column :cities, :lng, :integer
  end
end
