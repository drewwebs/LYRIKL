class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :title
      t.text :lyrics
      t.integer :views
      t.string :artist
      t.integer :artist_id
      t.index :title
      t.index :artist_id

      t.timestamps
    end
  end
end
