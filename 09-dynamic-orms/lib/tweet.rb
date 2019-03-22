class Tweet < ActiveRecord::Base
  belongs_to :user


  # def user
  #   User.find_by(id: self.id)
  #   # return the user that wrote this tweet
  #   # ActiveRecord docs .find .find_by .where (<- pay attention to the return value)
  # end
end
