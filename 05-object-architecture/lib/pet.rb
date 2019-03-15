class Pet
  attr_reader :name
  attr_accessor :mood

  def initialize(name)
    @name = name
    @mood = 'nervous'
  end

  def make_noise
    puts "im making the generic pet noise"
  end
end
