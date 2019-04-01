class ApplicationController < Sinatra::Base
  set :views, 'app/views'
  # set :method_override, true

  # TODO create a route to root/home render home
  get '/' do
    # "<h1>Hello World</h1>"
    erb :index
  end

  # THE INDEX shows me all them books tho
  get '/books' do
    #model
    @books = Book.all
    #response
    erb :index
  end

  # SHOW PAGE
  get '/books/:id' do
    # model
      #find book based on THE ID
      @book = Book.find(params[:id])
    #response
    erb :show
  end


end
