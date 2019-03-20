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


Q: Write the SQL to find all books written by a certain author given their name


3. Twitter where Tweets can have Tags (i.e. '#fun', '#hottake', '#tbt'). A tweet can have multiple tags, many tweets can be tagged with the same tag. Tweets have a message and user_id; tags have a name.


Q: Write the SQL to find all the tweets tagged '#tbt'


4. After completing the questions above, is there a rule you can determine about which table the foreign key belongs on given two associated tables?



## Lecture Notes
