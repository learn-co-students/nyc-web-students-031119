require 'bundler'
Bundler.require



# Connection to DB
ActiveRecord::Base.establish_connection(
  {
    adapter: 'sqlite3',
    database: 'db/twitter.db'
  }
)

# Logger
ActiveRecord::Base.logger = Logger.new(STDOUT)

# DB = {
#   conn: SQLite3::Database.new('db/twitter.db')
# }
#
# DB[:conn].results_as_hash = true
#
# sql = <<SQL
#   CREATE TABLE
#   IF NOT EXISTS tweets
#   (
#     id INTEGER PRIMARY KEY AUTOINCREMENT,
#     message TEXT,
#     user_id INTEGER
#   );
# SQL
#
# DB[:conn].execute(sql)
#
# sql = <<SQL
#   CREATE TABLE
#   IF NOT EXISTS users
#   (
#     id INTEGER PRIMARY KEY AUTOINCREMENT,
#     username TEXT
#   );
# SQL
#
# DB[:conn].execute(sql)

require_relative '../lib/passive_record.rb'
require_relative '../lib/user.rb'
require_relative '../lib/tweet.rb'
require_relative '../lib/tweets_app.rb'
