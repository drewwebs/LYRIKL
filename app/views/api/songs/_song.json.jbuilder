json.extract! song, :id, :artist, :title, :lyrics, :primary_tag, :image_url
json.fire song.views > 750000 ? true : false
json.view_count Song.stringify_views(song.views)
