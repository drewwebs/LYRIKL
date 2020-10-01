// Ajax calls
export const fetchSong = songId => (
    $.ajax({
        method: 'GET',
        url: `api/songs/${songId}`,
    })
);

export const fetchAllSongs = filters => (
    $.ajax({
        method: 'GET',
        url: 'api/songs',
        data: filters
    })
);

export const createSong = song => (
    $.ajax({
        method: 'POST',
        url: 'api/songs',
        data: song
    })
);

export const updateSong = song => (
    $.ajax({
        method: 'PATCH',
        url: `api/songs/${song.id}`
    })
);