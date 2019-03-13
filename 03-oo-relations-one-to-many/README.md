Intro to OO Relations
===========================

## Lecture Notes

* Has Many / Belongs to

* Single Source of truth

#### Where we've been

class Batch

class Student

batch = Batch.new('031119')

batch.students => ["sam", "elaina", "xavier", ...]

sam = Student.new('sam')

sam.batch => '031119'



#### Where we'll be from here on out

batch = Batch.new('031119')

batch.students => [<Student 0x0hjksaf @name='sam'>, <Student 0x0hjksaf @name='elaina'>, ...]

sam.batch => <Batch 0x00 @cohort='031119'>

Student.new('xavier', batch)



#### Define terminology
  * Model
  Classes that represent / hold the data of our application

  class Batch
  class Student
  class GithubRepoSyncer

  * Domain / Domain Modeling
  Models parts that make something up
  Subject Matter



  * Deliverables
  <!-- * User Stories -->


### Deliverables
* `Tweet#username` that returns the username of the tweet's user

* Create a User class. The class should have these methods:
  * `#initialize` which takes a username and has a reader method for the username
  * `#tweets` that returns an array of Tweet instances
  * `#post_tweet` that takes a message, creates a new tweet, and adds it to the user's tweet collection

* Create a Tweet class. The class should have these methods:
  * `Tweet#message` that returns a string
  * `Tweet#user` that returns an instance of the user class
  * `Tweet.all` that returns all the Tweets created.
