class ApplicationController < ActionController::API
  # before_action :authorized

  def encode_token(user_id)
    JWT.encode({user_id: user_id}, ENV['SECRET_KEY'])
  end

  def auth_headers
    # gets token from headers
    request.headers['Authorization']
  end

  def decoded_token
    begin
      JWT.decode(token, ENV['SECRET_KEY'])

      # [{"user_id"=>11}, {"alg"=>"HS256"}]
    rescue
      nil
    end
  end

  def logged_in
    !!curr_user
  end

  def authorized
    # this is useful to protect any given route
    # byebug
    render json: {errors: 'Unauthorized'} unless :logged_in
  end

  def curr_user
    begin
      # [{"user_id"=>11}, {"alg"=>"HS256"}][0]['user_id']  
      user_id = decoded_token[0]["user_id"]
      
      User.find(user_id)
    rescue
      nil
    end
  end

end


# purpose atuhorzed -> true or false
# is there a user