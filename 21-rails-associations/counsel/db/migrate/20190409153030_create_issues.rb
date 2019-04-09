class CreateIssues < ActiveRecord::Migration[5.2]
  def change
    create_table :issues do |t|
      t.integer :severity
      t.integer :teen_id
      t.string :desc

      t.timestamps
    end
  end
end
