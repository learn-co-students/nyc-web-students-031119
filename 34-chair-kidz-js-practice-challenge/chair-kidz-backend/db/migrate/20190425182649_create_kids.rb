class CreateKids < ActiveRecord::Migration[6.0]
  def change
    create_table :kids do |t|
      t.string "name"
      t.string "img_url"
      t.boolean "in_chair", default: false
      t.integer "votes", default: 0
      t.boolean "throne", default: false
      t.timestamps
    end
  end
end
