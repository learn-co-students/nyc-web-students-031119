class CreateAnimals < ActiveRecord::Migration[5.1]
  def change
    create_table :animals do |t|
      t.string :name
      t.belongs_to :species, foreign_key: true
      t.integer :diet

      t.timestamps
    end
  end
end
