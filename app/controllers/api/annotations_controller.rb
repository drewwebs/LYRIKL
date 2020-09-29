class Api::AnnotationsController < ApplicationController
    before_action :ensure_logged_in, only: [:create]

    def create
        @annotation = Annotation.new(annotation_params)

        if @annotation.save
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
        params.require(:annotation).permit(:body)
    end

end
