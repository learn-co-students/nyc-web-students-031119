class CreateStraws < ActiveRecord::Migration[5.2]
  def change
    create_table :straws do |t|

      t.timestamps
    end
  end
end
