class User < ApplicationRecord
  has_secure_password

  # def password=(password)
  #   encrypted = my_encrypt(password)
  #
  #   self.update(password_digest: encrypted)
  # end
  #
  # def authenticate(pw)
  #   my_encrypt(pw) == self.password_digest
  # end
end
