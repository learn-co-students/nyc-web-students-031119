class OceansController < ApplicationController
  # RESTful routes:
  # index => GET
  # show => GET
  # new => GET
  # edit => GET
  # delete => DELETE
  # create => POST
  # update => PATCH/PUT

  # sinatra syntax
  # get '/oceans' do
  def index # a controlled action
    puts "I GOT TO INDEX!!!"
    # what will happen with the response?
    # it's automagically looking for something?
    # model?
    @oceans = Ocean.all

    # sinatra rendering a response
    # erb :"oceans/index"
    # because you used a generator and colloed convention
    # it knows what folder to look in
    # render :index # how you don't need to tell it what folder it's in
    # wait????
    # what if programmers are lazy?
    # we are
    # so if you name the erb file the same name as the method
    # and you do not render at the end
    # it will automagically render the corresponding erb file

    # you will use render if you want to do something else
    # render in the future called mod 3
    # will let you send back othger types of data
    # render will also let you do other non-conventional erb file name

    # render just sends the response
  end

  # there is a generator for this,
  #there is even a generator to write your code
  # too powerful for you now!
  # until Vera and Chris say it's ok
  def show
    # model
    byebug # how you will pry from now on
    @ocean = Ocean.find(params[:id])
    render :show
  end

  def new
    # shortcuts for your forms...
  end

  def edit
  end

  def delete
  end

  def create
  end

  def update
  end
end
