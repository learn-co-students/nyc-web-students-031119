Intro to Object Orientation
===========================

aka: Object Oriented Programming (OOP)


## Lecture Notes

# What is an object
*

*

Does the following meet those properties?

player = {
  player_name: "Alan Anderson",
  number: 0,
  shoe: 16,
  points: 22,
  rebounds: 12,
  assists: 12,
  steals: 3,
  blocks: 1,
  slam_dunks: 1
}

## Exercise

Here is a naive implementation of a bank account in Ruby using only a hash which stores key-value pairs.

```ruby
bank_account = {"user_id": 3, "balance": 100}
```

Write an implementation of a bank account that meets the following requirements:

* can print the balance of the account
* can deposit money into the account
* can withdraw money from the account
* keeps track of the account number
* keeps track of the customer id of the account



## Resources

> **In Ruby, everything is an object.**
>
> [Source: Ruby Docs](https://www.ruby-lang.org/en/about/): Seeing Everything as an Object

- [Is everything really an object in Ruby?](https://stackoverflow.com/questions/3429553/is-everything-an-object-in-ruby)
- [Is this the same in other languages like Python?](https://stackoverflow.com/questions/865911/is-everything-an-object-in-python-like-ruby)
- Object can have slightly different meanings in different languages. Python’s is a looser definition than that of Ruby. However, in the end, the concept is the same even if the execution and implementation details exposing objects is different.

> A **class** is a blueprint which you use to create **objects**. An **object** is an **instance** of a class. The **object** is a _concrete thing_ while **instance** indicates the relationship of an **object** _to_ its **class**.
>
> Source: [The difference between Classes, Objects, and Instances](https://stackoverflow.com/questions/1215881/the-difference-between-classes-objects-and-instances)

- Classes = blueprints
- Objects = things
- Instances = can you fill in the blank? what do they describe? what are they? why are they important?


- [Instance variable: self vs @](https://stackoverflow.com/questions/1693243/instance-variable-self-vs)

### Extra reading

- [History of Object-Oriented Programming](https://en.wikipedia.org/wiki/Object-oriented_programming#History)
- [Why is `object_id` different from what you see when you create a new instance of a class?](https://stackoverflow.com/questions/2818602/in-ruby-why-does-inspect-print-out-some-kind-of-object-id-which-is-different)
