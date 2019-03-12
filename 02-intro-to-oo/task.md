# POST LECTURE Stretch Task

Define a method `Book.all` that works like this:

```ruby
Book.new('the master and margarita', 'mikhail bulgakov')
Book.new('the name of the rose', 'umberto eco')
Book.new('the essential calvin and hobbes', 'bill watterson')
```

after I run the code above, and call no other methods

I would expect that calling `Book.all`

would return an array with the 3 newly created book instances inside

```ruby
[<Book @title='the master and margarita'>, <Book @title='the name of the rose'>, <Book @title='calvin and hobbes'>]
```
 and that

```ruby
Book.all.first.class == Book
# => true
```


## Considerations
What are we calling `.all` on. It is not an instance of a book.  The methods we defined previously (title, author, cover_page) were _instance methods_ we called them on the instance.

What type of method is `.all`?
