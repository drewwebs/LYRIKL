json.partial! '/api/comments/comment', comment: @comment

json.num_likes @comment.likes.length

json.author do
  json.partial! '/api/users/user', user: @comment.author
end