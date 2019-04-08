class CreateSarcasticStudents < ActiveRecord::Migration[6.0]
  def change
    create_table :sarcastic_students do |t|
      t.string :name
      t.integer :age
      t.string :fav_joke
      t.boolean :blocked

      t.timestamps
    end
  end
end
