# 'https://www.googleapis.com/books/v1/volumes?q=ruby+programming'

require 'pry'
require 'rest-client'
require 'json'

# * Write an application that takes a search term from a user

# * Make a Request to the GoogleBooks API and get back some results
#   * https://www.googleapis.com/books/v1/volumes?q=ruby+programming
# * Display the titles, author names, and description for each book


puts "Welcome to the BookSearchr"
puts "What topic would you like to find books about:"

input = gets.chomp

# make HTTP request
response = RestClient.get("https://www.googleapis.com/books/v1/volumes?q=#{input}")
# turn the response into a hash
data = JSON.parse(response.body)


# * Display the title, author names, and description for each book
data["items"].each do |book|
  title = book["volumeInfo"]["title"]
  authors_array = book["volumeInfo"]["authors"]
  if authors_array
    authors = authors_array.join(" & ")
  else
    authors = "No Authors found for this book"
  end



  description_text = book["volumeInfo"]["description"]

  if description_text
    description = description_text[0...100] + '...'
  else
    description = "No description..."
  end

  # binding.pry
  puts "Title: #{title}"
  puts "Author(s): #{authors}"
  puts "Description: #{description}"
  # binding.pry
 # authors separated by an &
 # description the first 100 chars of description followed by ...
 puts "*" * 15
end



# response = make_web_request("https://www.googleapis.com/books/v1/volumes?q=ruby+programming")
#
# response.each do |book|
#   puts title
#   puts author
# end

# Models
# class Book
#
# class Author
#
# class User

# GoogleBooksFetcher <- hits the api and returns Book objects
# CLI class
