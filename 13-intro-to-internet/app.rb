require 'pry'
require_relative 'song'

class App
  def call(env)

    request = Rack::Request.new(env)
    resp = Rack::Response.new

    # TODO: create some new songs
    Song.new("Make a man out of you")
    Song.new("Hello lionel Ritche")
    Song.new("boos wayne")
    Song.new("pa rivers")
    Song.new("lil jack")

    if request.path =~ /songs/
      song_list_items = Song.all.map { |song| "<li>#{song.title}</li>" }.join

      resp.write("
          <h1>Bomb Song List</h1>
          <ul>
            <a href='http://www.google.com'> song number 1</a>
            <li> top 40 da bomb! 💣</li>
          </ul>
        ")

    # elsif req.path =~ /artists/
    elsif request.path.match(/artists/)
      resp.write('<h1>Artists List</h1>')
    else
      resp.write('<div>
        <h1>Not Found</h1>
        <img src="https://i.kym-cdn.com/entries/icons/original/000/023/677/Screen_Shot_2017-08-15_at_11.57.51_AM.png" />
        </div>')
    end
    resp.finish
  end
end
