Rails.application.routes.draw do
  resources :posts
  resources :users, only: [:show]
  root 'users#login'
  get "/users/:id/new_post", to: "posts#new", as: "new_user_post"
  post "users/:id/new_post", to: "posts#create", as: "create_user_post"
  post '/login', to: "users#login_user", as: "login"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
