
json.partial! '/api/annotations/annotation', annotation: @annotation


json.author do
  json.extract! @annotation.author, :id, :username
end

json.song do
  json.extract! @annotation.song, :id
end

@annotation.comments.includes(:author).each do |comment|
  json.comments do 
    json.set! comment.id do
      json.partial! '/api/comments/comment', comment: comment
      # json.extract! @annotation.comments, :ids, :body
      # json.extract! comment.author, :id, :username
    end
  end
end
  