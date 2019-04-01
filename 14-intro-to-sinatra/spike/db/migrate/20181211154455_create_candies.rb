class CreateCandies < ActiveRecord::Migration
  def change
      create_table :candies do |t|
        t.string :name
        t.boolean :tasty
      end
  end
end
