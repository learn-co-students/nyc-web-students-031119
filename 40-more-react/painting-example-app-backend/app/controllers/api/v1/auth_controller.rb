class Api::V1::AuthController < ApplicationController

  def create
    user = User.find_by(username: params[:username])

    if user && user.authenticate(params[:password])
      token = issue_token({id: user.id})
      render json: {id: user.id, username: user.username, token: token}
    else
      render json: {error: "Could not authenticate"}, status: 401
    end
  end

  def show
    # token = request.headers['Authenticate']
    # decoded = JWT.decode(token, 'secret', true, { algorithm: 'HS256' }).first
    # id = decoded["id"]
    #
    # user = User.find_by(id: id)

    if current_user
      render json: {id: current_user.id, username: current_user.username}
    else
      render json: {error: "Could not authenticate"}, status: 401
    end
  end

end
