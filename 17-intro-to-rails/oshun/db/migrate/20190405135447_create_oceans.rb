class CreateOceans < ActiveRecord::Migration[5.2]
  def change
    create_table :oceans do |t|
      t.integer :straws
      t.string :name
      t.integer :turtles
      t.integer :jellyfish

      t.timestamps
    end
  end
end
