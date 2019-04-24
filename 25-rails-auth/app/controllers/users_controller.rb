class UsersController < ApplicationController
  skip_before_action :authorized, only: [:new, :create]
  before_action :find_the_user, only: [:show,:edit,:update]

  def show

  end

  def edit

  end

  def update

  end

  def new
    @user = User.new
  end

  def create
    byebug
    @user = User.create(user_params)

    redirect_to @user
  end

  def destroy # DELETE request /users/:id
    @user = User.find(params[:id])
    @user.destroy
    flash[:notice] = 'You deleted ur account. YEET!'
    redirect_to new_user_path
  end


    private

    def user_params
      params.require(:user).permit(:username, :password)
    end

    def find_the_user
      @user = User.find(params[:id])
    end


end
