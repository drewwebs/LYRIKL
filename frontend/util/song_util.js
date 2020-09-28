// API info for last.fm calls
// const API_KEY = "7a6f8a4e181cb30d24744f6e6e158b29";
// const USER_AGENT = "drewwebs";

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

// // last.fm api call
// export const fetchArtwork = song => {
//     const title = song.title.split(" ").join("+");
//     const artist = song.artist.split(" ").join("+");
//     // debugger

//     return $.ajax({
//         method: 'GET',
//         url: 'http://ws.audioscrobbler.com/2.0/',
//         data: `method=track.getInfo&artist=${artist}&track=${title}&api_key=${API_KEY}&format=json`,
//         headers: {'user-agent': USER_AGENT},
//         dataType: 'jsonp'
//     });
// };