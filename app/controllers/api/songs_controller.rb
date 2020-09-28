require 'net/http'

class Api::SongsController < ApplicationController
    def index
        # songs = filters ? Song.where(primary_tag: params[:filters]) : Song.all
        songs = Song.all
        @songs = songs.limit(10)

        render :index
    end

    def show
        @song = Song.find(params[:id])
    end

    def create
        @song = song.create(song_params)
        @song.image_url = Song.set_image_url(@song.artist, @song.title)

        if @song.save!
            render :show
        else
            render json: @song.errors.full_messages, status: 422
        end
    end

    private

    def song_params
        params.require(:song).permit(:title, :lyrics, :views, :artist, :image_url)
    end

    def filters
        params[:filters]
    end
end
