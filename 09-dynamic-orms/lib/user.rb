class User < ActiveRecord::Base

  # has_many :tweets
  def tweets
    # return all the tweets this user wrote
    # ActiveRecord docs .where (<- pay attention to the return value)
  end
end
