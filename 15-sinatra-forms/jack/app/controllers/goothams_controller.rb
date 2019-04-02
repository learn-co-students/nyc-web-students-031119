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

  # all good answer on what we want to do in here
  # that's a super common interview question
  # hey, got that request
  # before you decide!!! check this _method
  # where should it go? try to find which method, which controller action to hit
  # FOUND IT!
  # POST: /goothams
  post "/goo" do
    # binding.pry
    # Gootham.new({ criminal_name: params["name"], secret_power: params["power"], length_of_last_prison_term: params["year"] })
    # @g = Gootham.new(params)
    # @g.save
    gootham = Gootham.create(params)

    # why redirect?
    redirect "/goothams" # seen the lab that has redirect?
    # redirect "https://google.com"

    # kinda
    # see some confirmation page
    # erb :configmration

    # send a response
    # @gs = Gootham.all
    # erb :"/goothams/index" # this is what is rendered
    # something very off
    # we want them to get to that index via a get to the index
  end
  # you receive it






  # getting things!
  # if we want to update something
  # some form to fill out to update things
  # mod 1 => give them a prompt gets.chomp

  # GET: /goothams/5/edit
  get "/goothams/:id/edit" do
    # yeah i have the id
    # model
    @give = Gootham.find(params[:id])

    erb :"/goothams/edit.html"
  end

  # PATCH: /goothams/5
  patch "/goothams/:id" do
    # binding.pry
    # model
    gootham = Gootham.find(params["id"])
    # sooooooo close, can't use that params trick anymore
    # can change it
    # like reassign
    # gettin gjuast the data we want

    gootham.update(params[:gootham])

    # response
    #$ redirecting because if we refreshed before... not good
    redirect "/goothams/#{gootham.id}"
  end










  # DELETE: /goothams/5/delete
  delete "/goothams/:id/delete" do
    redirect "/goothams"
  end
end
