class CreateSecs < ActiveRecord::Migration[5.1]
  def change
    create_table :secs do |t|
      t.string :name 
      t.integer :current_mod
      t.timestamps
    end
  end
end
