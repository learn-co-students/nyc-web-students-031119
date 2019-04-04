class AddJarIdToCookie < ActiveRecord::Migration
  def change
    add_column :cookies, :jar_id, :integer
  end
end
