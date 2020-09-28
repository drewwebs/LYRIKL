class CreateAnnotations < ActiveRecord::Migration[5.2]
  def change
    create_table :annotations do |t|
      t.text :body, null:false
      t.integer :author_id, null:false
      t.integer :song_id, null:false
      t.index :author_id
      t.index :song_id

      t.timestamps
    end
  end
end
