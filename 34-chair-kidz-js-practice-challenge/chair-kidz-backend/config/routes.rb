Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
        resources :kids, only: [:index, :create]
        patch 'kids/chair', to: "kids#chair"
        patch 'kids/throne', to: "kids#throne"
        patch 'kids/vote', to: "kids#vote"
        delete 'kids', to: "kids#destroy"
      end
    end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
