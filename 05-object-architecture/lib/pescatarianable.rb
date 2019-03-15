module Pescatarianable

  module InstanceMethods
    def eat_another_fish
      puts "yum x_x"
    end
  end

  module ClassMethods
    def im_called_on_the_class
      puts "hi"
    end
  end
end
