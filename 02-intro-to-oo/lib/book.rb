class Book

  def initialize(title, author)
    @title = title
    @author = author
  end

  def title
    @title.split.map do |word|
      word.capitalize
    end.join(" ")
  end

  def author
    @author.split.map do |word|
      word.capitalize
    end.join(" ")
  end

  def cover_page
    # zebra = "hello"
    # puts zebra
    # binding.pry
    # capitalized_title = @title.split.map do |word|
    #   word.capitalize
    # end.join(" ")
    #
    # capitalized_author = @author.split.map do |word|
    #   word.capitalize
    # end.join(" ")
    # "Practical Object Oriented Design In Ruby"
    #   by
    # Author Name

    puts "\"#{self.title}\"\n\tby\n#{self.author}"
  end



  # some comment

end
