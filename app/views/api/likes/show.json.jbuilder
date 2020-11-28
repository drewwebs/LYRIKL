json.partial! '/api/likes/like', like: @like

json.liker do
  json.partial! '/api/users/user', user: @like.liker
end