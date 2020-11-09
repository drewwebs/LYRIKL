json.extract! comment, :id, :body, :commentable_id, :commentable_type, :author_id

json.author do
  json.extract! comment.author, :username
end