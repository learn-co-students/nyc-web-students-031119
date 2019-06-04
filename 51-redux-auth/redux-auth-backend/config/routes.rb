Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :users, only: [:show] # profile
      resources :subjects, only: [:index, :create]
      resources :notes, only: [:index, :create]

      post '/signup', to: 'users#create'
      post '/login', to: 'auth#login'
      get '/auto_login', to: 'auth#auto_login'
    end
  end
end
