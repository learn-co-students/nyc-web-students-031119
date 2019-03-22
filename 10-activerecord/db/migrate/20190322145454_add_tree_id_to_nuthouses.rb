class AddTreeIdToNuthouses < ActiveRecord::Migration[5.2]
  def change
    add_column :nut_houses, :tree_id, :integer
  end
end
