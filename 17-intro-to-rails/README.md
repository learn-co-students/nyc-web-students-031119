# Intro to Rails

### SWBATS
* Review important concepts from Sinatra and learn how they tie in with Rails
* Determine the differences between Sinatra and Rails
* Create a new Rails application
* Navigate the file structure of a Rails application
* Utilize Rails generators to create models and migrations
* Build controllers, views, models, migrations, and routes in Rails
* Understand the significance of *convention over configuration* in Rails

## What is Rails?

Like Sinatra, Rails is a MVC web framework built on top of rack. Sinatra is more simple, lightweight, and minimalistic; it is more flexible but requires more configuration. Rails is generally preferred for more larger scale applications.

### 3 Basic Principles of Rails

* Ruby Programming Language
* Model-View-Controller Architecture
* Programmer Happiness
  * Heavy emphasis on Convention over Configuration.
  * This means that a programmer only needs to specify and code out the non-standard parts of a program.

#### Convention Over Configuration

Rails was created in 2003 by David Heinemeier Hansson, while working on the code base for Basecamp, a project management tool by 37signals. David extracted Ruby on Rails and officially released it as open source code in July of 2004. Despite rapid iteration of the Rails code base throughout the years, it has stuck to three basic principles:

* Ruby Programming Language
* Model-View-Controller Architecture
* Programmer Happiness

Rails was created with the goal of increasing programmers' happiness and productivity levels. In short, with Rails you can get started with a full-stack web application by quickly creating pages, templates and even query functions.

Rails heavily emphasizes "Convention over Configuration." This means that a programmer only needs to specify and code out the non-standard parts of a program. Even though Rails comes with its own set of tools and settings, you're certainly not limited to library of rails commands and configurations. Developers are free to configure their applications however they wish, though adopting conventions is certainly recommended.

![](https://s3-us-west-2.amazonaws.com/student-resources/uploads/lecture/Screen+Shot+2017-06-09+at+10.04.20+AM.png)

## Sinatra - What's important?

* **M** odel
  * Communicates with db
  * Takes and manipulates information from the server (class & instance methods)
* **V** iew
  * Shows a page to the user/client
  * Receives information from the user
* **C** ontroller
  * Connects the model to the view
  * Makes sense of the client request and delivers appropriate output
* Routes, RESTful routing

```

                                          -----> Model <----> DB
                                         |         |
            response        request      |         |
   Browser <-------- router -------> controller <--
                             GET         ^
                             POST        |
                             PATCH        -----> view <----> html/images/css/js
                             DELETE
```

## Rails vs. Sinatra

#### What's the same?
* MVC pattern
* Params
* Rendering/redirecting
* Models and ActiveRecord
* Views/ERB & forms (a little different, we will discuss Rails form helpers later)

#### What's different?
Our routes & controller are now **separated.**

Sinatra controller example:

```
  get '/' do
    # some code here
    # erb or redirect to some view
  end
```

In Rails:
`config/routes.rb` will hold all information about our routes, including the URI, which controller and which action(method) it should direct to, and any URL helper paths.

`config/routes.rb`:

```
  get '/', to: <controller_name>#<action_name>, as: <helper_path_name>
```

In our controller:

```
class ControllerName < ApplicationController

  def <action_name>
    #some code here
    #render (implicit or explicit) or redirect
  end

end
```

Our controller actions become ordinary methods. If Rails convention is followed, views are automatically found and rendered within the view directory.

#### What's new?
* Rails helpers (e.g. URL helpers, form helpers) route `resources`
* Rails generators
* Rails "magic"

## Conclusion

Rome wasn't built in a day and neither can someone learn Rails in a day. Keep coding and it will all come together.
