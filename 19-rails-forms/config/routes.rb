Rails.application.routes.draw do
  resources :sarcastic_students, only: [:index, :show, :edit, :new, :create, :update]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
