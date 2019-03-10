require 'bundler/setup'
Bundler.require

ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3', # tells you what database you're using
  database: "db/development.sqlite"
)

require_all 'app'
