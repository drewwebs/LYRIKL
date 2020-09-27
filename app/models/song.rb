class Song < ApplicationRecord
    validates :title, :lyrics, :views, :artist, presence:true

    after_initialize :set_views

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

    def set_views
        self.views ||= rand(1530000)
    end
end
