class CreateFlights < ActiveRecord::Migration[5.0]
  def change
    create_table :flights do |t|
      t.string :from_city_id
      t.string :to_city_id

      t.timestamps
    end
  end
end
