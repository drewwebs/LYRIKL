# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_11_14_193444) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "annotations", force: :cascade do |t|
    t.text "body", null: false
    t.integer "author_id", null: false
    t.integer "song_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "line_start"
    t.integer "line_end"
    t.integer "start_offset"
    t.integer "end_offset"
    t.index ["author_id"], name: "index_annotations_on_author_id"
    t.index ["song_id"], name: "index_annotations_on_song_id"
  end

  create_table "artists", force: :cascade do |t|
    t.string "name", null: false
    t.text "description"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "comments", force: :cascade do |t|
    t.string "body", null: false
    t.string "commentable_type"
    t.bigint "commentable_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "author_id", null: false
    t.index ["commentable_type", "commentable_id"], name: "index_comments_on_commentable_type_and_commentable_id"
  end

  create_table "likes", force: :cascade do |t|
    t.string "likeable_type"
    t.bigint "likeable_id"
    t.integer "liker_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["likeable_type", "likeable_id"], name: "index_likes_on_likeable_type_and_likeable_id"
    t.index ["likeable_type", "liker_id", "likeable_id"], name: "index_likes_on_likeable_type_and_liker_id_and_likeable_id", unique: true
  end

  create_table "songs", force: :cascade do |t|
    t.string "title", null: false
    t.text "lyrics"
    t.integer "views", null: false
    t.string "artist", null: false
    t.integer "artist_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "primary_tag", null: false
    t.string "image_url", null: false
    t.index ["artist_id"], name: "index_songs_on_artist_id"
    t.index ["title"], name: "index_songs_on_title"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
