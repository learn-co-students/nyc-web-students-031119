class ApplicationController < ActionController::Base

  # method for a "cart"
  # maybe session? hold my nacho_id's
  def cart
    session[:cart] ||= []
    # if session[:cart] == nil
    #   session[:cart] = []
    # else
    #   session[:cart]
    # end
  end

  # method to add__nacho_to_cart

  def add_to_cart(nacho_id)
    cart << nacho_id
  end


  #display your cart on your website
  def show_the_cart
    @cart_items = Nacho.find(cart)
  end



end
