class Song < ApplicationRecord
    PATH = ['track', 'album', 'image', 3, '#text']

    validates :title, :lyrics, :views, :artist, presence:true

    after_initialize :set_views, :ensure_image_url

    has_many :annotations
    
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

    def reformat_lyrics(line_start, line_end, start_offset, end_offet)
        lines = self.lyrics.split("/n")
        lines[line_start]
    end

    def self.set_image_url(artist, title)
        response = LastFM::Track.get_info(artist: artist, track: title)

        return response.dig(*PATH) || 'https://bitcoinist.com/wp-content/uploads/2018/11/shutterstock_756307072-2560x1701.jpg'
        
        # if response['track']
        #     if response['track']['album']
        #         if response['track']['album']['image']
        #             if response['track']['album']['image'][3]
        #                 return response['track']['album']['image'][3]['#text'] || "https://bitcoinist.com/wp-content/uploads/2018/11/shutterstock_756307072-2560x1701.jpg"
        #             else
        #                 return 'https://bitcoinist.com/wp-content/uploads/2018/11/shutterstock_756307072-2560x1701.jpg'
        #             end
        #         end
        #     end
        # end
    end

    def ensure_image_url
        self.image_url ||= Song.set_image_url(self.artist, self.title)
    end


    def set_views
        self.views ||= rand(1530000)
    end
end
