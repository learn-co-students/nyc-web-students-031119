class Notes < ActiveRecord::Migration[5.2]
  def change
    create_table :notes do |t|
      t.string :text
      t.references :subject
    end
  end
end
