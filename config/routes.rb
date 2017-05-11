Rails.application.routes.draw do
  resources :users
  resources :directory
  resources :announcement
  resources :service
  resources :login
  
  post 'login/authenticate' => 'login#authenticate'

  root 'home#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
