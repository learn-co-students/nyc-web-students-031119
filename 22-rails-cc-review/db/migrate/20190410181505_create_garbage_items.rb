class CreateGarbageItems < ActiveRecord::Migration[6.0]
  def change
    create_table :garbage_items do |t|
      t.integer :dumpster_id
      t.string :name
      t.string :description
      t.boolean :salvageable
      t.timestamps
    end
  end
end
