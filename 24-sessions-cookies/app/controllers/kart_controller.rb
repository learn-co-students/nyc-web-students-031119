class KartController < ApplicationController
  def update
    # byebug
    # create a session here with a smortly named key based on params passed in
    # session[:cart_id] = params[:nacho_id]
    # I want a helper method that reads and writes to the session hash
      #show session is just a hash
    # add_nacho_to_cart(params[:nacho_id])
    # Tell my user that something happened!
    # flash[:notice] = "Successfully added a #{params[:nacho_name]} to cart!"
    # redirect_to nachos_path

  end


end
