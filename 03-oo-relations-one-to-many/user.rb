class User
  attr_reader :username

  def initialize(username)
    @username = username
    @tweets = []
  end

  def tweets
    @tweets
  end

  def post_tweet(message)
    tweet = Tweet.new(message, self)
    @tweets << tweet
  end
end
