Rails.application.routes.draw do
  resources :turtles
  # this automagically sets up your 7 RESTful routes
  # including PUT
  # no => you can never delete, disable

  resources :straws
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/oceans', to: "oceans#index"
  get '/pools', to: "oceans#index"
  get '/oceans/:id', to: "oceans#show"


  # the routes in bewetten the view and the user and the controller
  # map this out
  # send a request from the browser
  # it gets to your rails server
  # rails checks for the route, what does it match up to?
  # it will run that controller's action method
  # it will do stuff (to your model)
  # it will send a response
end
