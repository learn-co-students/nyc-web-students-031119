class SecsController < ApplicationController
before_action :get_sec, only: [:show, :edit, :update]
  def index 
    @secs = Sec.all
  end 

  def show 
  end 

  def edit 
  end

  def update
    @sec.update(sec_params)
    redirect_to z
  end 

  private 

  def sec_params 
    params.require(:sec).permit(:current_mod)
  end

  def get_sec
    @sec = Sec.find(params[:id])
  end
end
