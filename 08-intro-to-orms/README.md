## Object Relational Mapper (ORM)

+ Definition:



## Active Record Pattern

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

Q: Write the SQL to find all books written by a certain author given the author's id.
Q: Write the SQL to find all books written by a certain author given the author's name.



2. Books and Authors where each book can have one or multiple authors. Books should have a title and authors should have a name


Q: Write the SQL to find all books written by a certain author given their name


3. Twitter where Tweets can have Tags (i.e. '#fun', '#hottake', '#tbt'). A tweet can have multiple tags, many tweets can be tagged with the same tag. Tweets have a message and user_id; tags have a name.


Q: Write the SQL to find all the tweets tagged '#tbt'


4. After completing the questions above, is there a rule you can determine about which table the foreign key belongs on given two associated tables?



## Lecture Notes
