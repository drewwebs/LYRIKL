class Api::CommentsController < ApplicationController
    # def index
    #     @comments = Comment.all
    #     render :index
    # end

    def show
        @comment = Comment.find(params[:id])
        render :show
    end

    def create
        @comment = Comment.new(comment_params)
        
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: :unprocessable_entity
        end
    end

    private
    def comment_params
        params.require(:comment).permit(:body, :commentable_id, :commentable_type, :author_id)
    end
end
