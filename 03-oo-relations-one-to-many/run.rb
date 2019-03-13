require 'pry'
require_relative './user.rb'
require_relative './tweet.rb'


# Tweet.new
coffee_dad = User.new('coffe_dad')
tea_uncle = User.new('tea_uncle')

coffee_dad.post_tweet('coffee#')
coffee_dad.post_tweet('everything is bad')
tea_uncle.post_tweet('Tea!')
coffee_dad.post_tweet('more #coffee')
tea_uncle.post_tweet('#tea')

binding.pry
