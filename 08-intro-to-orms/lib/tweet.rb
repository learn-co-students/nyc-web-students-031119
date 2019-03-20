class Tweet
  attr_accessor :message, :user_id
  attr_reader :id

  ALL = []
  # ALL << 'string' #this is ok
  # ALL = 'somehting' #this would error
  # @@all = []

  def self.all
    sql = "SELECT * from tweets"

    results = DB[:conn].execute(sql)
    # "SELECT * from tweets"
    # ALL
    # binding.pry


    # rn, results is an array of hashes
    # instead this method should return an array of Tweet instances
    results
  end

  def initialize(attributes={})
    @message = attributes['message']
    @user_id = attributes['user_id']
  end

  def save
    self.class.all << self
  end

end
