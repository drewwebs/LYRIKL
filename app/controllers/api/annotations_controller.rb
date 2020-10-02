class Api::AnnotationsController < ApplicationController
    before_action :ensure_logged_in, only: [:create]

    def create
        @annotation = Annotation.new(annotation_params)
        @annotation.line_start, @annotation.line_end, @annotation.start_offset, @annotation.end_offset = params[:annotation][:selection][:line_start].to_i, params[:annotation][:selection][:line_end].to_i, params[:annotation][:selection][:start_pos].to_i, params[:annotation][:selection][:end_pos].to_i
        
        if validate_lines(@annotation) == nil
            render json: ["You can't annotate that line"], status: :unprocessable_entity
        elsif @annotation.save
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

    def validate_lines(annotation)
        song = Song.find(annotation.song_id) 
        lines = song.lyrics.split("  \n")

        
        if lines[annotation.line_start][0] ==  "&" && lines[annotation.line_start][1] == "#"
            annotation.body = "You can't annotate a verse header"
            annotation.save
            return nil
        elsif lines[annotation.line_end][0] ==  "&" && lines[annotation.line_end][1] == "#"
            annotation.body = "You can't annotate a verse header"
            annotation.save
            return nil
        end
        
        return true
        # lines[annotation.line_start..annotation.line_end].each do |line|
        #     if line.split("").include?("[") || line.split("").include?("]")
        #         annotation.body = "Each line can only have one annotation"
        #         annotation.save
        #         return nil
        #     end
        # end
    end

end
