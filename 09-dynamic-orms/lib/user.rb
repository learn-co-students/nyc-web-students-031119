class User < ActiveRecord::Base
  has_many :tweets
  # "SELECT * FROM tweets WHERE tweets.user_id = self.id"

  # def tweets
  #   binding.pry
  #   Tweet.where(user_id: self.id)
  #   # return all the tweets this user wrote
  #   # ActiveRecord docs .where (<- pay attention to the return value)
  # end
end
