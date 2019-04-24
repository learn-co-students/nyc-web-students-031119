class User < ApplicationRecord
  has_secure_password

  # validates :password_digest, {presence: true}
  # def password
  #   @password
  # end
  #
  # def password=(pt_pw)
  #   # something to the pt_pw then save it to my DB
  #   self.password_digest = BCrypt::Password.create(pt_pw)
  # end
  #
  # def authenticate(pt_pw)
  #   # inside the login INVOKE this method on a USER object pass in the pt_pw
  #
  #   if BCrypt::Password.new(self.password_digest) == pt_pw
  #     true
  #   end
  # end

end
