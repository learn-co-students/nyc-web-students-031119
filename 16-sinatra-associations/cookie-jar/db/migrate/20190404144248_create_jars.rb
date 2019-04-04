class CreateJars < ActiveRecord::Migration
  def change
    create_table :jars do |t|
      t.integer :size
      t.string :color

      t.timestamps null: false
      # you will see this in rails all the time
      # that adds two columns for you
      # created_at, updated_at  => timestamp columns
      # this can be very useful information, espoecially for debugging

      # the test probably has env set to test
      # set to developement
      # ohh... bad weekend... ohhh... HOPE!
      # one don't planb on that please
      # ask for permission explicitly to do that thing
    end
  end
end
