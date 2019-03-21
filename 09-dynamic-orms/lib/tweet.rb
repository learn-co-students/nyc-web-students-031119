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
    # if the tweet is coming from the DB
    # update it
    if persisted?
      update_record
    else
      # otherwise, if its brand new
      # insert into the db
      insert_record
    end
  end

  def persisted?
    !!self.id
  end

  private

  def insert_record
    # sql = "INSERT INTO tweets (message, user_id) VALUES ('my latest tweet', 2)"
    # sql = "INSERT INTO tweets (message, user_id) VALUES ('#{self.message}', #{self.user_id})"
    sql = <<-SQL
    INSERT INTO tweets
    (message, user_id)
    VALUES (?, ?);
    SQL
    # binding.pry
    DB[:conn].execute(sql, self.message, self.user_id)

    last_row_sql = <<-SQL
    SELECT *
    FROM tweets
    ORDER BY id DESC
    LIMIT 1
    SQL
    @id = DB[:conn].execute(last_row_sql)[0]["id"]
    self
  end

  def update_record
    sql = <<-SQL
    UPDATE tweets
    SET message = ?, user_id = ?
    WHERE id = #{self.id}
    SQL

    DB[:conn].execute(sql, self.message, self.user_id)
    self
  end

end
