json.extract! user, :id, :username, :email

json.photo user.photo.attached? ? url_for(user.photo) : nil

if user.likes.length > 0
    json.likes do
        user.likes.each do |like|
            json.set! like.id do
                json.partial! 'api/likes/like', like: like
            end
        end
    end
else
    json.likes({})
end


if user.comments.length > 0
    json.comments do
        user.comments.each do |comment|
            json.set! comment.id do
                json.partial! 'api/comments/comment', comment: comment
            end
        end
    end
else
    json.comments({})
end

if user.annotations.length > 0
    json.annotations do
        user.annotations.each do |annotation|
            json.set! annotation.id do
                json.partial! 'api/annotations/annotation', annotation: annotation
            end
        end
    end
else
    json.annotations({})
end
