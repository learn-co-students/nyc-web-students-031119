class CreateTeens < ActiveRecord::Migration[5.2]
  def change
    create_table :teens do |t|
      t.string :name
      t.integer :age
      t.string :pronoun

      t.timestamps
    end
  end
end
