class AddUniquenessConstraintToLikes < ActiveRecord::Migration[5.2]
  def change
    add_index :likes, [:likeable_type, :liker_id, :likeable_id], unique: true
  end
end
