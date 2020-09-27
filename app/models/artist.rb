class Artist < ApplicationRecord
    has_many :songs

    belongs_to :user,
        optional:true
end
