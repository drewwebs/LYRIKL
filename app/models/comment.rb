class Comment < ApplicationRecord
    validates :body, presence:true

    belongs_to :commentable, 
        polymorphic: true

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    has_many :likes,
        as: :likeable
end
