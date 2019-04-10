class AddImageUrlsToDumpstersAndGarbageItems < ActiveRecord::Migration[6.0]
  def change
    add_column :dumpsters, :img_url, :string
    add_column :garbage_items, :img_url, :string
  end
end
