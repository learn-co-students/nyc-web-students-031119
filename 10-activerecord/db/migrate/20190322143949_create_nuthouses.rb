class CreateNuthouses < ActiveRecord::Migration[5.2]
  def change
    create_table :nut_houses do |t|
      t.integer :squirrel_id
    end
  end
end
