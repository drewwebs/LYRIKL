class Annotation < ApplicationRecord
    validates :body, :song_id, :author_id, presence:true

    belongs_to :author,
        class_name: :User

    belongs_to :song


    def reformat_lyrics
        song = Song.find(self.song_id) 
        lines = song.lyrics.split("  \n")

        # lines[self.line_start][0..self.start_offset].each_char.with_index do |char,idx|
        #     
        #     if char == "["
        #         self.start_offset += 1
        #     elsif char == "]"
        #         i = 2
        #         lines[self.line_start][idx+2..self.start_offset].each_char do |char2|
        #             if char2 == ")"
        #                 self.start_offset += i + 1
        #                 break
        #             else
        #                 i += 1
        #             end
        #         end
        #     end
        # end

        # lines[self.line_end][0..self.end_offset].each_char.with_index do |char, idx|
        #     if char == "["
        #         self.end_offset += 1
        #     elsif char == "]"
        #         i = 2
        #         lines[self.line_end][idx+2..self.end_offset].each_char do |char2|
        #             if char2 != ")"
        #                 i += 1
        #             else
        #                 self.end_offset += i + 1
        #             end
        #         end
        #     end
        # end


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
