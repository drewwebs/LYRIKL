class Song < ApplicationRecord
    validates :title, :lyrics, :views, :artist, presence:true

    after_initialize :set_views, :ensure_image_url

    def self.stringify_views(views)
        stringified = ""

        case views
        when (0..1000)
            stringified = views.to_s
        when (1000..1000000)
            views /= 1000.0
            views = views.round(1) % 1 == 0 ? views.round(0) : views.round(1)
            stringified = views.to_s + "K"
        else
            views /= 1000000.0
            views = views.round(1) % 1 == 0 ? views.round(0) : views.round(1)
            stringified = views.to_s + "M"
        end
        stringified
    end

    def self.set_image_url(artist, title)
        response = LastFM::Track.get_info(artist: artist, track: title)
        response['track']['album']['image'][3]['#text']
    end

    def ensure_image_url
        self.image_url ||= Song.set_image_url(self.artist, self.title)
    end


    def set_views
        self.views ||= rand(1530000)
    end
end
