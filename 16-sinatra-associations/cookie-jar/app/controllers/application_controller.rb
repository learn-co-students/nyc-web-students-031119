require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
    set :method_override, true
    # slow down... probably
  end

  get "/" do
    erb :welcome
  end

end
