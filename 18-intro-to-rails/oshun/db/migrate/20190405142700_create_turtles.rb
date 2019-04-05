class CreateTurtles < ActiveRecord::Migration[5.2]
  def change
    create_table :turtles do |t|
      t.string :name
      t.integer :size

      t.timestamps
    end
  end
end
