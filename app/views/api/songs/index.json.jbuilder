@songs.each do |song|
    json.set! song.id do
        json.extract! song, :id
    end
end