require 'bundler'
Bundler.require


DB = {
  conn: SQLite3::Database.new('db/twitter.db')
}


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
