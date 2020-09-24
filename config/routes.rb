Rails.application.routes.draw do
  resources :users

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resources :songs, only: [:index, :create, :update, :show]
    resource :session, only: [:create, :destroy]
  end
  root to: 'static_pages#root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
