/**
+1. Add one song to the beginning and the end of the array.
+2. Loop over the array, and remove any words or characters that obviously don't belong.
+3. Find and replace the > character in each item with a - character.
4. Add each string to the DOM in index.html in the main content area. 
**/


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
songs.forEach(function(item){
    document.getElementById("songList").innerHTML += `<li>${item}</li>`
});