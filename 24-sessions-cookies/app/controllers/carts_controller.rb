class CartsController < ApplicationController

  def update
    # byebug
    @nacho = Nacho.find(params[:nacho_id])
    flash[:notice] = "noice choice you just added #{@nacho.name}"
    add_to_cart(params[:nacho_id])

    redirect_to nachos_path

  end

end
