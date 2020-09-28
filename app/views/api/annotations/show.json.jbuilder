json.annotation do
  json.partial! '/api/annotations/annotation', annotation: @annotation
end

json.author do
  json.partial! '/api/users/user', user: @annotation.author
end
