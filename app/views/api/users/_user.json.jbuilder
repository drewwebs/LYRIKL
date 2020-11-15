json.extract! user, :id, :username, :email
json.likes user.likes.pluck(:id, :likeable_id)