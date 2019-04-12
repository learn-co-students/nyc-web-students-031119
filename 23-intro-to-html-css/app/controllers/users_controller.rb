class UsersController < ApplicationController

  def login
  end

  def login_user
    user = User.find_or_create_by(username: params[:login])
    redirect_to user
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

end
