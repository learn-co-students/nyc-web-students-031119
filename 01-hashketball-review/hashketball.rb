require 'pry'
# puts "at the top"
name = "alex"
other_name = "vera"

def game_hash
  {
    home: {
      team_name: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: [
        {
          player_name: "Alan Anderson",
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slam_dunks: 1
        }, {
          player_name: "Reggie Evans",
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slam_dunks: 7
        }, {
          player_name: "Brook Lopez",
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slam_dunks: 15
        }, {
          player_name: "Mason Plumlee",
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slam_dunks: 5
        }, {
          player_name: "Jason Terry",
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slam_dunks: 1
        }
      ]
    },
    away: {
      team_name: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: [
        {
          player_name: "Jeff Adrien",
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slam_dunks: 2
        }, {
          player_name: "Bismak Biyombo",
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slam_dunks: 10
        }, {
          player_name: "DeSagna Diop",
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slam_dunks: 5
        }, {
          player_name: "Ben Gordon",
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slam_dunks: 0
        }, {
          player_name: "Brendan Haywood",
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slam_dunks: 12
        }
      ]
    }
  }
end

instructors = [{name: "ali", mood: "happy"}, {name: "vera", mood: "excited!"}, {name: "chris", mood: "very happy"},  {name: "chris", mood: "very sad"}]
# => ["ali", "vera", "chris"]

# When to use `map`
# I have an array of some number of things
# I want to get back an array of the same number of things
# but where each one is different or transformed in some way

# When to use `select`
# I have an array of some number of things
# I want to get back an array of some subset of those things

# When to use `find`
# I have an array of some number of things
# I want to get back the thing that passes the test
def get_instructor_names(instructors)
  instructors.map do |instructor|
    instructor[:name]
  end.uniq
end

get_instructor_names(instructors)

def square_all(arr)
  arr.map do |n|
    n * n
  end
end


square_all([2,4,6])


def get_all_players
  game_hash.values.map do |team_hash|
    team_hash[:players]
  end.flatten
end

def find_player_by_name(player_list, player_name)
  player_list.find do |player_hash|
    player_hash[:player_name] == player_name
  end
end

def num_points_scored(player_name)
  # look down the line (look through the list of all players)
  player_list = get_all_players # this method would return an array (a list) of all the players

  # find the one where the name matches the given name
  player = find_player_by_name(player_list, player_name)

  # return that players points
  player[:points]
end

def shoe_size(player_name)
  # look down the line (look through the list of all players)
  player_list = get_all_players # this method would return an array (a list) of all the players

  # find the one where the name matches the given name
  player = player_list.find do |player_hash|
    player_hash[:player_name] == player_name
  end

  # return that players points
  player[:shoe]

end
