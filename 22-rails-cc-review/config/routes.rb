Rails.application.routes.draw do
  resources :garbage_items, only: [:index, :show, :new, :create]
  resources :dumpsters

  get "/dumpsters/:id/dumpsterfire", to: "dumpsters#dumpsterfire", as: "burnitall"

  root 'dumpsters#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
