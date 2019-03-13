class User
  attr_reader :username

  def initialize(username)
    @username = username
    # @tweets = [] <- this introduced multiple sources of truth
  end

  def tweets
    # Go ask the Tweet model a question ('querying the model')

    # Look through all of the tweets

    # "select" the ones that belong to this user instance


    Tweet.all.select do |tweet|
      # tweet.username == self.username
      tweet.user == self
    end
  end

  def post_tweet(message)
    Tweet.new(message, self)
  end
end
