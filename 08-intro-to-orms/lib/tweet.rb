class Tweet
  attr_accessor :message, :user_id
  attr_reader :id
  ALL = []

  def self.all
    ALL
  end

  def initialize(attributes={})
    @message = attributes['message']
    @user_id = attributes['user_id']
  end

  def save
    self.class.all << self
  end

end
