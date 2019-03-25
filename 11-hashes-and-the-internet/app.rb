# 'https://www.googleapis.com/books/v1/volumes?q=ruby+programming'

require 'pry'
require 'rest-client'
require 'json'

# * Write an application that takes a search term from a user

# * Make a Request to the GoogleBooks API and get back some results
#   * https://www.googleapis.com/books/v1/volumes?q=ruby+programming
# * Display the titles, author names, and description for each book


# make HTTP request
response = RestClient.get("https://www.googleapis.com/books/v1/volumes?q=dogs")
# turn the response into a hash
data = JSON.parse(response.body)


# * Display the title, author names, and description for each book
data["items"].each do |book|
 puts "Title: #{book["volumeInfo"]["title"]}"
 puts "*" * 15
end



# response = make_web_request("https://www.googleapis.com/books/v1/volumes?q=ruby+programming")
#
# response.each do |book|
#   puts title
#   puts author
# end
