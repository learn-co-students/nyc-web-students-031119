class TweetsApp

  def call
    puts 'Welcome to Twitter'

    puts 'Enter a username:'
    username = gets.chomp
    user = User.find_or_create_by(username: username)

    puts 'Enter a message:'
    message = gets.chomp

    tweet = Tweet.new({'user_id' => user.id, 'message' => message})
    tweet.save

    tweets = Tweet.all
    render(tweets)
  end

  private

  def render(tweets)
    tweets.each.with_index(1) do |tweet, i|
      puts "#{i}. User #{tweet.user_id} says: #{tweet.message}"
    end
  end
end
