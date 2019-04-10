class CreateDumpsters < ActiveRecord::Migration[6.0]
  def change
    create_table :dumpsters do |t|
      t.string :nickname
      t.string :location
      t.integer :cubic_feet
      t.string :pick_up
      t.timestamps
    end
  end
end
