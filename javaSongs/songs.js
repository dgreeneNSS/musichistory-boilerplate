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
    //push in new song
    songs.push(document.getElementById('songI').value + ' by ' + document.getElementById('artistsI').value + ' on the album ' + document.getElementById('albumI').value);
    console.log('pushed in');
    
    //create song list variable
    var songList = document.getElementById('songList');
    
    console.log('songs', songs);
    songList.innerHTML += `<li>${songs[i]} <button class='deltButton' onclick="delt(event)">delete</button></li>`


};


songs.forEach(function(item){
    document.getElementById("songList").innerHTML += `<li>${item} <button class='deltButton' onclick="delt(event)">delete</button></li>`;
});


var XMLSongs = new XMLHttpRequest();
var placeToGo = document.getElementById('songList');
XMLSongs.addEventListener('load', function(){
    this.readyState == 4 && this.status == 200;
    
    console.log(XMLSongs.responseText);
    
    result = JSON.parse(XMLSongs.responseText).songs;
    
    console.log('result', result);
    for (var i = 0; i < result.length; i++){
        var listItem = document.createElement('li');
        listItem.innerHTML += result[i].Song + ' by ' + result[i].Artist + ' on the album ' + result[i].Album + `<button class='deltButton' onclick="delt1(event)">delete</button>`;
        placeToGo.appendChild(listItem);
}});
XMLSongs.open("GET", "songs.JSON", true);
XMLSongs.send();


var r = document.getElementsByClassName('deltButton');
for (var j = 0; j < r.length; j++){
    console.log('r', r);
//    console.log('hi');
    r[j].addEventListener('click', delt);
};

function delt(event){
    console.log('hi');
    var f = document.getElementById('songList');
    console.log('f', f.childNodes);
//    console.log(event.target.parentNode);
    f.removeChild(event.target.parentNode);
};
function delt1(event){
    console.log('event.target', event.target);
    var o = document.getElementById('songList');
//    console.log('f', f.childNodes);
//    console.log(event.target.parentNode);
    o.removeChild(event.target.parentNode);
};

function addMore(){
    var More = new XMLHttpRequest();
    var shootIn = document.getElementById('songList');
        this.readyState == 4 && this.status == 200;

        console.log(More.responseText);

        complete = JSON.parse(XMLSongs.responseText).songs;

        console.log('complete', complete);
        for (var i = 0; i < complete.length; i++){
            var moreItems = document.createElement('li');
            moreItems.innerHTML += result[i].Song + ' by ' + result[i].Artist + ' on the album ' + result[i].Album + `<button class='deltButton' onclick="delt1(event)">delete</button>`;
            placeToGo.appendChild(moreItems);
    };
    XMLSongs.open("GET", "moreSongs.JSON", true);
    XMLSongs.send();
}




