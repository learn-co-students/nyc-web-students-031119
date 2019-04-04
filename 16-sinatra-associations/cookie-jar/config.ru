require './config/environment'

if ActiveRecord::Migrator.needs_migration?
  raise 'Migrations are pending. Run `rake db:migrate` to resolve the issue.'
end

run ApplicationController
use CookiesController

# Rack::Override
# it's true
# HTTP 1.1 => GET/POST
# HTTP 2.0, 3.0 QUIC

# i never used sinatra or ruby
# 1 day
