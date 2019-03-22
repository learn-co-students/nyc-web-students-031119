class CreateSquirrels < ActiveRecord::Migration[5.2]
  def change
    create_table :squirrels do |t|
      t.string :name
      t.integer :weight
      t.string :color
      t.boolean :tail

      t.timestamps
    end
  end
end

# CreateSquirrels.new.change
#
# class ActiveRecord::Migration
#
#   def change(table_name)
#     yield(TableBuilder.new)
#     # run the SQL
#   end
#
# end

# def my_each(arr)
#   value = "ciao"
#
#   count = 0
#
#   while count < arr.length
#     yield(arr[count])
#     count += 1
#   end
#
# end
