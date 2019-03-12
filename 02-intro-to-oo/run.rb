require 'pry'
require_relative './lib/book'

player = {
  player_name: "Alan Anderson",
  number: 0,
  shoe: 16,
  points: 22,
  rebounds: 12,
  assists: 12,
  steals: 3,
  blocks: 1,
  slam_dunks: 1
}

$book_title = ""

calvin_and_hobbes = {
  title: 'the essential calvin and hobbes',
  author: 'bill watterson'
}

poodr = {
  title: 'practical object oriented design in ruby',
  author: 'sandi metz'
}

hp = Book.new("hp and the sorceres stone", "jk rowling")
poodr = Book.new('practical object oriented design in ruby', 'sandi metz')

binding.pry
# 'bye'
