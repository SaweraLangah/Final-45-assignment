// Assignment # 40
function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album["tracks"] = tracks;
    }
    return album;
}
console.log(make_album("Artist One", "The First Album"));
console.log(make_album("Arist Two", "The Second Album"));
console.log(make_album("Albbum Three", "The Third Album"));
