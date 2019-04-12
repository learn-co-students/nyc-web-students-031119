class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :profile_img
      t.string :bio
      t.integer :followers
      t.integer :followings
      t.timestamps
    end
  end
end
