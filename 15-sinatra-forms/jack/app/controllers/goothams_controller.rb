class GoothamsController < ApplicationController
  # what up???
  # no one is asking you to memorize whacky syntax
  # BDD

  # index, show => GETs
  # new, create => GET to show a form, POST create something from that form

  # GET: /goothams
  # index
  get "/goothams" do # if else
    # what do we want to do?
    # a list of individual things from the database
    # the list of this (goothams) resources everything

    # model
    @gs = Gootham.all # you can... but NOOOOOOOO

    erb :"/goothams/index"
  end

  # GET: /goothams/new
  # GET us the form to fill in data with
  get "/goothams/new" do
    # model you don't touch the model
    puts "HEY DID I HIT THIS THING?"

    # response
    erb :"/goothams/new.html"
  end

  # get "/goothams/dosomethingcool" do
  #
  # end

  # GET: /goothams/5
  # show => show me one thing
  get "/goothams/:id" do
    # binding.pry
    puts "OHHH WAIT... WHY>?"

    # show one thing
    # model
    @whatevewriwant = Gootham.find(params["id"])

    # response
    erb :"/goothams/show.html"
  end













  # POST: /goothams
  post "/goothams" do
    redirect "/goothams"
  end



  # GET: /goothams/5/edit
  get "/goothams/:id/edit" do
    erb :"/goothams/edit.html"
  end

  # PATCH: /goothams/5
  patch "/goothams/:id" do
    redirect "/goothams/:id"
  end

  # DELETE: /goothams/5/delete
  delete "/goothams/:id/delete" do
    redirect "/goothams"
  end
end
