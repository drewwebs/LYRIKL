class Api::AnnotationsController < ApplicationController
    before_action :ensure_logged_in, only: [:create]

    def create
        @annotation = Annotation.new(annotation_params)
        @annotation.line_start, @annotation.line_end, @annotation.start_offset, @annotation.end_offset = params[:annotation][:selection][:line_start].to_i, params[:annotation][:selection][:line_end].to_i, params[:annotation][:selection][:start_pos].to_i, params[:annotation][:selection][:end_pos].to_i
        
        if @annotation.save
            @annotation.reformat_lyrics
            render :show
        else
            render json: @annotation.errors.full_messages, status: :unprocessable_entity
        end

    end

    def show
        @annotation = Annotation.find(params[:id])
        render :show
    end

    def update       
        @annotation = Annotation.find(params[:id])
        @annotation.body = annotation_params[:body]
        if @annotation.save
            render :show
        else
            render json: @annotation.errors.full_messages, status: :unprocessable_entity
        end
    end

    def destroy
        @annotation = Annotation.find(params[:id])
        @annotation.undo_reformat
        @annotation.delete
    end

    private
    def annotation_params
        params.require(:annotation).permit(:body, :author_id, :song_id)
    end

end
