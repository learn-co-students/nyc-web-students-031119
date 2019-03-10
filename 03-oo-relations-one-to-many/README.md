Intro to OO Relations
===========================

## Lecture Notes

* Has Many / Belongs to

* Single Source of truth

#### Where we've been


#### Where we'll be from here on out





#### Define terminology
  * Model

  * Domain / Domain Modeling


  * Schema

  * Deliverables
  * User Stories


### Deliverables

* Create a User class. The class should have these methods:
  * `#initialize` which takes a username and has a reader method for the username
  * `#tweets` that returns an array of Tweet instances
  * `#post_tweet` that takes a message, creates a new tweet, and adds it to the user's tweet collection

* Create a Tweet class. The class should have these methods:
  * `Tweet#message` that returns a string
  * `Tweet#user` that returns an instance of the user class
  * `Tweet.all` that returns all the Tweets created.
  * `Tweet#username` that returns the username of the tweet's user
