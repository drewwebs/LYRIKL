class Api::AnnotationsController < ApplicationController
    before_action :ensure_logged_in, only: [:create]

    def create
        # debugger
        line_start, line_end, start_pos, end_pos = params[:annotation][:selection][:line_start], params[:annotation][:selection][:line_end], params[:annotation][:selection][:start_pos], params[:annotation][:selection][:end_pos]
        @annotation = Annotation.new(annotation_params)

        if @annotation.save
            # debugger
            @annotation.reformat_lyrics(line_start.to_i, line_end.to_i, start_pos.to_i, end_pos.to_i)
            render :show
        else
            render json: @annotation, status: :unprocessable_entity
        end

    end

    def show
        @annotation = Annotation.find(params[:id])
        render :show
    end

    def update

    end

    private
    def annotation_params
        params.require(:annotation).permit(:body, :author_id, :song_id)
    end

end
