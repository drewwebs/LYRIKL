class Api::LikesController < ApplicationController
    def show
        @like = Like.find(params[:id])
        render :show
    end

    def create
        @like = Like.new(like_params)
        @like.liker_id = current_user.id
        if @like.save
            render :show
        else
            render json: @like.errors.full_messages, status: :unprocessable_entity
        end
    end

    def destroy
        @like = Like.find(params[:id])
        @like.delete
    end

    private
    def like_params
        params.require(:like).permit(:likeable_id, :likeable_type, :liker_id)
    end
end
