class AddColumnToSongs < ActiveRecord::Migration[5.2]
  def change
    add_column :songs, :image_url, :string, null:false
  end
end
