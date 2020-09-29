class Annotation < ApplicationRecord
    validates :body, :song_id, :author_id, presence:true

    belongs_to :author,
        class_name: :User

    belongs_to :song

end
