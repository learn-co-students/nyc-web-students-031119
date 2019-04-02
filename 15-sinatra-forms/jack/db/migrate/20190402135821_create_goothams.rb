class CreateGoothams < ActiveRecord::Migration
  def change
    create_table :goothams do |t|
      # i forgot
      t.string :criminal_name
      t.string :secret_power
      t.integer :length_of_last_prison_term

      t.timestamps null: false
    end
  end
end
