class CreateCookies < ActiveRecord::Migration
  def change
    create_table :cookies do |t|
      t.string :kind
      t.integer :size
      t.integer :cook_time

      t.timestamps null: false
    end
  end
end
