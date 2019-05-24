class ApplicationController < ActionController::API

  # before_action :authenticate_user
  #
  # def authenticate_user
  #   if !current_user
  #     render json: {error: "Not Authenticated"}, status: 401
  #   end
  # end

  def issue_token(payload)
    JWT.encode(payload, 'secret', 'HS256')
  end

  def token
    request.headers['Authenticate']
  end

  def decode_token
    begin
      JWT.decode(token, 'secret', true, { algorithm: 'HS256' }).first
    rescue JWT::DecodeError
      return nil
    end
  end

  def id_from_token
    decoded = decode_token

    if decoded
      decoded["id"]
    end
  end

  def current_user
    # memoization
    # if @user
    #   @user
    # else
    #   User.find_by(id: id_from_token)
    # end
    @user ||= User.find_by(id: id_from_token)
  end

end
