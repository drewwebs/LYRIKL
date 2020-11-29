class Api::UsersController < ApplicationController
  before_action :set_user, only: [:destroy]

  def show
    @user = User.find(params[:id])
    render :show
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find(params[:id])
    @user.photo.attach(user_params[:photo])
  
    if @user.save
      render :show
    else
      render json: @user.errors.full_messages
    end
  end
  
  private
    def set_user
      @user = User.find(params[:id])
    end

    def user_params
      params.require(:user).permit(:username, :email, :password, :photo)
    end
end
