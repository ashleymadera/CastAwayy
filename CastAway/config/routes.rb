Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :admins 
  resources :patterns 
  resources :patterns do
    resources :projects, only: [:create]
  end
  resources :projects, except: [:create]

  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
end
