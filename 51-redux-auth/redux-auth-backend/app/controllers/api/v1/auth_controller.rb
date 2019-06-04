class Api::V1::AuthController < ApplicationController
  # skip_before_action :authorized, only: [:login]

  def login
    user = User.find_by(username: params[:user][:username])
    if user && user.authenticate(params[:user][:password])
      user_id = user.id
      token = encode_token(user_id)
    
      render json: {user: UserSerializer.new(user), token: token}
    else
      render json: {errors: 'beep boop beep bop'}
    end
  end

  def auto_login
    byebug
    if curr_user
      render json: curr_user
    else
      render json: {errors: 'beep boop beep bop'}
    end
  end

end