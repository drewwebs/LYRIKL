class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(
            params[:user][:name],
            params[:user][:password]
        )
        if @user
            login!(@user)
            render 'api/users/show'
        elsif params[:user][:password].length < 6
            render json: ['Password is not valid'], status: 
            @user = User.find_by_username(params[:user][:name]) || User.find_by_email(params[:user][:name])
            if @user
                render json: ['Incorrect password'], status: 422
            else
                render json: ['Incorrect nickname or email'], status: 422
            end
        end
    end

    def destroy
        logout!
        render json: {message: "Logged out"}
    end
end
