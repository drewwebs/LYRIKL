class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(
            params[:user][:name],
            params[:user][:password]
        )
        if @user
            login!(@user)
            render 'api/users/show'
        else
            @user = User.find_by_username(params[:user][:name]) || User.find_by_email(params[:user][:name])
            if @user
                render json: ['Invalid password'], status: 401
            else
                render json: ['Invalid nickname or email'], status: 401
            end
        end
    end

    def destroy
        logout!
        render json: {message: "Logged out"}
    end
end
