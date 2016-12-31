Rails.application.routes.draw do
  get "/login" => 'login#index'

  get "/directory" => 'directory#index'

  get "/registration" => 'registration#index'

  get "/service" => 'service#index'

  get "/" => 'home#index'
  
  root 'home#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
