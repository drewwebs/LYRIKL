
json.partial! '/api/annotations/annotation', annotation: @annotation


json.author do
  json.extract! @annotation.author, :id, :username
end

json.song do
  json.partial! '/api/songs/song', song: @annotation.song
end