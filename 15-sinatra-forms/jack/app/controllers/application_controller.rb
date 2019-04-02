require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
    set :method_override, true
    # it intercepted all of our requests
    # the internet is broken => HTTP 1.1 => GET/POST 70%
    # in order to get PATCH to work
  end

  get "/" do
    erb :welcome
  end
  # it would work... but it'd be very messy
end
