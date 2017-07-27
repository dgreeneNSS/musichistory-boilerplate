/*
+1. In the navigation bar, make sure you have two links labeled "List Music", and "Add Music".
+2. Add a DOM element that contains some input fields for the user to enter in the name of a song, the artist for the song, and the album. You do not need to enclose them in a <form> element because we're not actually submitting this form anywhere.
+3. Add a <button> element at the bottom of the input fields labeled "Add".
+ The input fields and the add button make up the Add Music View.
+ The existing view - the combination of the filter form and the song list - will be referred to as the List Music View.
+The Add Music View should not appear when the user first visits your page. The song list with the corresponding filter form should be visible.
+ When the user clicks on "Add Music" in the navigation bar, the List Music View should be hidden, and the Add Music View should be shown (see example wireframe).
+ When the user clicks on "List Music" in the navigation bar, the Add Music View should be hidden, and the List Music View should be shown (see example wireframe).
Once the user fills out the song form and clicks the add button, you should collect all values from the input fields, add the song to your array of songs, and update the song list in the DOM.
*/

var listS = document.getElementById('songList');
var hidden = document.getElementById('addMusicView');

function HideSL() {
        hidden.style.display = 'block';
        listS.style.display = 'none';
};

function HideNM() {
        hidden.style.display = 'none';
        listS.style.display = 'block';
};




var songs = [];

        songs[songs.length] = "Element - by Kendrick Lamar on the album Damn";
        songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
        songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
        songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
        songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
        songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
        songs[songs.length] = "Lucy in the Sky with Diamonds - by The Beatles on the album Sgt. Pepper's Lonely Hearts Club Band";
for (i = 0; i < songs.length; i++){
    if (songs[i]){
        songs[i] = songs[i].replace('>', '-');
    }
    if (songs[i]){
        songs[i] = songs[i].replace('*', '')
    }
    if (songs[i]){
        songs[i] = songs[i].replace('!', '')
    }
    if (songs[i]){
        songs[i] = songs[i].replace('@', '')
    }
    if (songs[i]){
        songs[i] = songs[i].replace('(', '')
    }
}


function AddSongs() {
    console.log('hello');
    var p = document.getElementById('songList');
    songs.push(document.getElementById('songI').value + ' by ' + document.getElementById('artistsI').value + ' on the album ' + document.getElementById('albumI').value);
    console.log('songs', songs);
    songs.forEach(function(item){
    document.getElementById("songList").innerHTML += `<li>${item}</li>`
})

};


songs.forEach(function(item){
    document.getElementById("songList").innerHTML += `<li>${item}</li>`
});


















