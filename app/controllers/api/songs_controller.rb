class Api::SongsController < ApplicationController
    def index
        songs = filters ? Song.where(primary_tag: params[:filters]) : Song.all

        @songs = songs.limit(10).offet(params[:offset])

        render :index
    end

    def show
        @song = Song.find(params[:id])
    end

    def create
        @song = song.create(song_params)
        if @song.save!
            render :show
        else
            render json: @song.errors.full_messages, status: 422
        end
    end

    private

    def song_params
        params.require(:song).permit(:title, :lyrics, :views, :artist)
    end

    def filters
        params[:filters]
    end
end
