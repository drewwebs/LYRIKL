class Like < ApplicationRecord

    validates :likeable_id, uniqueness: { scope: [:likeable_type, :liker_id], message: "You cannot like the same thing twice" }

    belongs_to :liker,
        foreign_key: :liker_id,
        class_name: :User

    belongs_to :likeable,
        polymorphic: true
end
