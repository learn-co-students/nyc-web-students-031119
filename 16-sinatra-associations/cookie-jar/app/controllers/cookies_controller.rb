class CookiesController < ApplicationController
  # what were they?
  # index, show, edit, create, delete, new, update






  # GET: /cookies
  get "/cookies" do
    erb :"/cookies/index.html"
  end

  # GET: /cookies/new
  get "/cookies/new" do
    # do i need anything fomr the model?
    # deeply inspect...
    # technically not right now
    # maybe if you want some other information

    # do i need anything from the model now?
    # yes!!!!
    @jar_time = Jar.all

    # response
    erb :"/cookies/new.html"
  end

  # POST: /cookies
  # create
  post "/create_cookies" do
    # binding.pry
    Cooky.create(params[:cooky])
    redirect "/cookies" # index
  end

  # GET: /cookies/5
  get "/cookies/:id" do
    erb :"/cookies/show.html"
  end

  # GET: /cookies/5/edit
  get "/cookies/:id/edit" do
    # do i need anything from the model?
    # not yet... but once we start writing our erb
    # we want...
    @jar_time = Jar.all
    @cooky = Cooky.find(params[:id])

    erb :"/cookies/edit.html"
  end

  # PATCH: /cookies/5
  patch "/cookies/:id" do
    # binding.pry
    cooky = Cooky.find(params[:id])
    cooky.update(params[:cooky])

    redirect "/cookies/#{cooky.id}"
  end

  # DELETE: /cookies/5/delete
  delete "/cookies/:id/delete" do
    binding.pry
    redirect "/cookies"
  end
end
