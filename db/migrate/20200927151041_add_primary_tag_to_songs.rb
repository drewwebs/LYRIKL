class AddPrimaryTagToSongs < ActiveRecord::Migration[5.2]
  def change
    add_column :songs, :primary_tag, :string, null:false
    change_column_null(:songs, :title, false)
    change_column_null(:songs, :artist, false)
    change_column_null(:songs, :views, false)
  end
end
