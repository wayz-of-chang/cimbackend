Rails.application.routes.draw do
  resources :users
  resources :directory
  resources :registration
  resources :service
  
  resources :login do
    member do
	  post 'authenticate'
	end
  end

  root 'home#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
