Rails.application.routes.draw do
  get 'sessions/new'

  resources :users
  resources :directory, :only => [:index]
  resources :announcement, :only => [:index]
  resources :service, :only => [:index]
  resources :contact, :only => [:index]
  resources :login, :only => [:index, :create]

  get 'logout' => 'login#logout'

  root 'home#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
