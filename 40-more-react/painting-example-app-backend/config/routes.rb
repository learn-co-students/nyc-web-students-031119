Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :paintings, param: :slug
      post '/auth', to: 'auth#create'
      # Api::v1::AuthController.new.create
      get '/current_user', to: 'auth#show'
      # Api::v1::AuthController.new(request).show
    end
  end

end
