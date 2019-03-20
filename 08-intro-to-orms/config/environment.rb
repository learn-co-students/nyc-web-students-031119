require 'bundler'
Bundler.require


DB = {
  conn: SQLite3::Database.new('db/twitter.db')
}

# module SQLite3
#   class Database
#     attr_accessor :results_as_hash
#
#     def initialize(filename, config = {})
#
#     end
#   end
# end


DB[:conn].results_as_hash = true

sql = <<SQL
  CREATE TABLE
  IF NOT EXISTS tweets
  (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    message TEXT,
    user_id INTEGER
  );
SQL

DB[:conn].execute(sql)



require_relative '../lib/tweet.rb'
require_relative '../lib/tweets_app.rb'
