class CreateArtists < ActiveRecord::Migration[5.2]
  def change
    create_table :artists do |t|
      t.string :name, null:false
      t.text :description
      t.integer :user_id
      t.timestamps
    end
  end
end
