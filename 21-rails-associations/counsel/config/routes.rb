Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # get '/issues', to: "issues#index"
  # get '/issues/new', to: "issues#new"
  # get '/issues/:id', to: "issues#show", as:"issue"
  # post '/issues', to:"issues#create"
  resources :issues, only: [:index, :show, :new, :create, :edit]
end
