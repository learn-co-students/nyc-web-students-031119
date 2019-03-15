class Cat < Pet
  attr_reader :num_lives

  include Pettable # include means 'pull these methods AS INSTANCE METHODS'
  include Pescatarianable::InstanceMethods

  extend Pescatarianable::ClassMethods # extends meand 'pull these methods in AS CLASS METHODS'

  def initialize(*args)
    super
    @num_lives = 9
  end

  def make_noise
    puts "im meowing"
    # super
  end

  # def make_noise
  #   puts "woof!"
  # end
end


# Cats & dogs
# Pettable
# be_petted

# Cats & fish
# Pescatarianable
# eat_another_fish
