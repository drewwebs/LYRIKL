class Annotation < ApplicationRecord
    validates :body, :song_id, :author_id, presence:true

    belongs_to :author,
        class_name: :User

    belongs_to :song

    has_many :comments,
        as: :commentable

    has_many :likes,
        as: :likeable

    def reformat_lyrics
        song = Song.find(self.song_id) 
        lines = song.lyrics.split("  \n")
        lines[self.line_end].insert(self.end_offset, "](#{self.id.to_s})")
        lines[self.line_start].insert(self.start_offset, "[")
        song.lyrics = lines.join("  \n")
        song.save!
    end

    def undo_reformat
        song = Song.find(self.song_id) 
        lines = song.lyrics.split("  \n")
        if self.line_start == self.line_end
            i = lines[self.line_start].index("](#{self.id.to_s})")
        else
            i = lines[self.line_start].length - 1
        end

        found = false
        until found == true
            if lines[self.line_start][i] == "["
                lines[self.line_start][i] = ""
                found = true
            else
                i-=1
            end
        end

        lines[self.line_end] = lines[self.line_end].split("](#{self.id.to_s})").join("")
        song.lyrics = lines.join("  \n")
        song.save!
    end
end
