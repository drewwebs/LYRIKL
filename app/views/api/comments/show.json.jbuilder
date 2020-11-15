json.partial! '/api/comments/comment', comment: @comment

json.num_likes @comment.likes.length