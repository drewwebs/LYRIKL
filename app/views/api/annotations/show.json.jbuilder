
json.partial! '/api/annotations/annotation', annotation: @annotation


json.author do
  json.partial! '/api/users/user', user: @annotation.author
end

json.song do
  json.extract! @annotation.song, :id
end

json.num_likes @annotation.likes.length

@annotation.comments.includes(:author).each do |comment|
  json.comments do 
    json.set! comment.id do
      json.partial! '/api/comments/comment', comment: comment
      json.num_likes comment.likes.length
    end
  end
end
  