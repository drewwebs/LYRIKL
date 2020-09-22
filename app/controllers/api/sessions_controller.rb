class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(
            params[:user][:name],
            params[:user][:password]
        )
        if @user.nil?
            render json: ['Invalid credentials'], status: 401
        else
            login!(@user)
            render 'api/users/show'
        end
    end

    def destroy
        logout!
        render json: {message: "Logged out"}
    end
end
