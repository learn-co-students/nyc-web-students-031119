require 'pry'
class Player

  # player = {
  #   player_name: "Alan Anderson",
  #   number: 0,
  #   shoe: 16,
  #   points: 22,
  #   rebounds: 12,
  #   assists: 12,
  #   steals: 3,
  #   blocks: 1,
  #   slam_dunks: 1
  # }

  # attr_reader :name, :number, :shoe, :points, :rebounds
  # attr_writer :name, :number, :shoe, :points, :rebounds
  attr_reader :name
  attr_accessor :number, :shoe, :points, :rebounds

  def initialize(name, number, shoe, points, rebounds)
    @name = name
    @number = number
    @shoe = shoe
    @points = points
    @rebounds = rebounds
  end
  #
  # def name
  #   @name
  # end
  #
  # def number
  #   @number
  # end

  def points=(new_points)
    @points = new_points
  end

end

player = Player.new("Alex Anderson", 0, 16, 22, 12)

binding.pry
