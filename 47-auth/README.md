# Signing Up as a new user
- just CRUD, we wont cover today
-  it's basic crud PLUS the new stuff we are covering today

# Logging In
- a bit different than in mod 2. Why?

  - How we did it before:
  Sessions. Special type of cookie. Cookies are domain specific
  HTTP is a stateless protocol
  - What's different:
  SPA. 2 domains. We'll have to send a little piece of identifying data back and forth along with every
  request and response. We'll use the Headers of an HTTP request

# Fullstack Features
When building a new feature
- Does the schema need to change?
User
- Do i need any new routes?
Auth#create POST /auth
Auth#show GET /current_user

X User#show (this is probably the 'profile' route)
X User#current_token

### Authentication - you are who you say you are
- As an existing user I can login by providing a username and password
  - (As an admin I can create new users from rails console since no sign up feature exists)
- As a user attempting to login, if I supply the wrong username & pw combo I will see an error asking me to try again
- As a logged in user I will see "Welcome <username>" in the Navbar
- As a logged in user in place of the "Log in" link in Navbar I will see "Log out". Clicking "Log out" will log me out and redirect me to the login form.
- *NEW* As a logged in user who has left the site without logging out, when I revisit the site it should automatically log me back in.
  - we'll check for a _token_ in localStorage
  - we'll see if a user exists with that token (id) in our database
  - when we send the request, we'll have to send along the token
  - if so, update the state
  - My identity will be established by a *token* which meets 2 properties assigned to me when I log in.
    1. It is unique to me
    2. The server knows the token was issued by the server

### Authorization - what things you can and can't do
- As a logged in user I can see all the things.
- As a logged out user I can only see the About page.
- As a logged out user I will be redirected to the Log in page if I try to visit an unauthorized route.


# Duplicated logic to abstract
1. the check for the token (and finish the check by making REQUEST to server) in CDM
  withAuth HOC
2. fetch requests, to include the token in the headers every time
3. before_action in controllers
