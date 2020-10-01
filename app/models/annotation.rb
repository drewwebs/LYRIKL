class Annotation < ApplicationRecord
    validates :body, :song_id, :author_id, presence:true

    belongs_to :author,
        class_name: :User

    belongs_to :song


    def reformat_lyrics(line_start, line_end, start_offset, end_offset)
        song = Song.find(self.song_id) 
        lines = song.lyrics.split("  \n")
        lines[line_end].insert(end_offset, "](#{self.id.to_s})")
        lines[line_start].insert(start_offset, "[")
        song.lyrics = lines.join("  \n")
        song.save!
    end

    def undo_reformat(line_state, line_end)
        song = Song.find(self.song_id) 
        lines = song.lyrics.split("  \n")
        lines[line_end].split("[").join("")
        lines[line_start].split("](#{self.id.to_s}[")
        song.lyrics = lines.join("  \n")
        song.save!
    end
end
