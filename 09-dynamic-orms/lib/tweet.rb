class Tweet
  attr_accessor :message, :user_id
  attr_reader :id

  # ALL = []
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
    # [{}, {}, {}, {}]
    # [<Tweet>, <Tweet>, <Tweet>, <Tweet>]
    results.map do |row|
      Tweet.new(row)
    end
  end

  def initialize(attributes={})
    @message = attributes['message']
    @user_id = attributes['user_id']

    @id = attributes['id']
  end

  def save
    if self.persisted?
      # update the existing record
    else
      # do all this / create a new one
      sql = <<-SQL
        INSERT INTO tweets
        (message, user_id)
        VALUES (?, ?)
      SQL

      DB[:conn].execute(sql, self.message, self.user_id)
    end
  end

  def persisted?
    !!self.id
  end

end
