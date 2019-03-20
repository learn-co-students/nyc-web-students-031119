user = User.new('coffee_dad')
users
| id  | username
  1       coffee_dad

Tweet.new('coffee#', user)
tweets
| id | message | user_id
 4567  'coffee'    1

## Object Relational Mapper (ORM)

+ Definition:

Object Oriented Programming (Ruby world)
Relational Databases (SQL)
mapping back and forth between them



## Active Record Pattern
Remind me to define this tomorrow

# CRUD REVIEW
What are the four ways we can interact with data?

* Create
SQL:
Ruby:

* Read
SQL:
Ruby:

SQL:
Ruby:

* Update
SQL:
Ruby:

* Destroy
SQL:
Ruby:



## Domain Modeling and SQL Review

Draw out what your schema (structure of your tables and columns) would be for the following domains. Consider what tables are needed, what columns belong on which tables, and where the foreign keys belong.

1. Books and Authors where each book has a single author. Books should have a title and authors should have a name


book belongs_to author
books  
id | title                   | author_id
1    POODR                      10
2    Secrets of the JS Ninja    11
3   99 Bottles of OOP           10

author has_many books
authors
id | name        
10   Sandi Metz      
11   John Resig     





Q: Write the SQL to find all books written by a certain author given the author's id.

SELECT * FROM books WHERE author_id = 10

Q: Write the SQL to find all books written by a certain author given the author's name.

SELECT * FROM books
JOIN authors
ON books.author_id = authors.id
WHERE authors.name = "whatever their name is"

2. Books and Authors where each book can have one or multiple authors. Books should have a title and authors should have a name

book has many book_authors
book has many authors through book_authors
books  
id | title                   
1    POODR                      
2    Secrets of the JS Ninja    
3   99 Bottles of OOP  
4   Ruby & JS together         


book_author belongs to book
book_author belongs to author

book_authors
id | book_id | author_id
1      1           10
2      3           10
3       2          11
4     4             10
5     4             11


author has many book_authors
author has many books through book_authors

authors
id | name        
10   Sandi Metz      
11   John Resig   


Q: Write the SQL to find all books written by a certain author given their name

SELECT * FROM books
JOIN book_authors
ON book_authors.book_id = books.id
JOIN authors
ON book_authors.author_id = author.id
WHERE authors.name = "whatever their name is"


3. Twitter where Tweets can have Tags (i.e. '#fun', '#hottake', '#tbt', #learnlovecode). A tweet can have multiple tags, many tweets can be tagged with the same tag. Tweets have a message and user_id; tags have a name.


tags  
id | name                   
1    #learnlovecode
2    #tbt


tweet_tags
id | tweet_id | tag_id
1       10       1
2       10       2
3       11       1

tweets
id | message      | user_id | created_at
10    'coffee'      55
11   'im tweeting'  134
12   'more coffee'  55






Q: Write the SQL to find all the tweets tagged '#tbt'


4. After completing the questions above, is there a rule you can determine about which table the foreign key belongs on given two associated tables?

The foreign key lives on the belongs_to


## Lecture Notes
