class CreateTrees < ActiveRecord::Migration[5.2]
  def change
    create_table :trees do |t|
      t.integer :birth_year
      t.string :species

      t.timestamps
    end
  end
end
