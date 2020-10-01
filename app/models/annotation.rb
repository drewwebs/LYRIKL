class Annotation < ApplicationRecord
    validates :body, :song_id, :author_id, presence:true

    belongs_to :author,
        class_name: :User

    belongs_to :song


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
        lines[self.line_start][self.start_offset..-1].each_char.with_index do | char, idx |
            if lines[self.line_end][idx] == "["
                lines[self.line_end][idx] = ""
                break
            end
        end
        lines[self.line_end] = lines[self.line_end].split("](#{self.id.to_s})").join("")
        song.lyrics = lines.join("  \n")
        song.save!
    end
end
