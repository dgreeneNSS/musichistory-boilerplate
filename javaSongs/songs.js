//LOAD IN CREATE NEW SONG PAGE AND HIDE SONG LIST
$('#HideSL').on("click",function(){
    $("#addMusicView").css("display", "block");
    $("#songList").css("display", "none");
//    console.log('hello');
});
  
$('#HideNM').on("click",function(){
    $("#addMusicView").css("display", "none");
    $("#songList").css("display", "block");
//    console.log('hello');
});

//CREATE ORIGNAL SONGS FROM ARRAY
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

//ADDING IN NEW SONGS FROM INPUT
function AddSongs() {
    var listItem = document.createElement('li');
        $(listItem).html($('#songI').val() + ' by ' + $('#artistsI').val() + ' on the album ' + $('#albumI').val() + `<button onclick="delt(event)">delete</button>`);
    $('#songList').append(listItem)
};

//LOADING IN ORIGINAL SONGS
songs.forEach(function(item){
    $('#songList').append(`<li>${item} <button onclick="delt(event)">delete</button></li>`);
});

//LOAD IN FIRST JSON
var XMLSongs = $.getJSON("songs.JSON");
var placeToGo = $('#songList');
XMLSongs.onload = () => {
    this.readyState == 4 && this.status == 200;
    result = JSON.parse(XMLSongs.responseText).songs;
    for (var i = 0; i < result.length; i++){
        var listItem = document.createElement('li');
        $(listItem).html(result[i].Song + ' by ' + result[i].Artist + ' on the album ' + result[i].Album + `<button onclick="delt(event)">delete</button>`);
        placeToGo.each(function(index, element){
            element.append(listItem);
        });
}};

//CREATING DELETE BUTTON
var r = $('.deltButton');
for (var j = 0; j < r.length; j++){
    r[j].click(delt);
};

function delt(event){
    var f = $('#songList');
    f.each(function(arrayIndex, currentElement){
        currentElement.removeChild(event.currentTarget.parentNode);
    });
};

//LOAD SONGS FROM MORE BUTTON
function addMore(){
//    $.getJSON("moreSongs.JSON")
    var More = $.getJSON("moreSongs.JSON")
    var shootIn = $('#songList');
        this.readyState == 4 && this.status == 200;
        complete = JSON.parse(XMLSongs.responseText).songs;
        console.log('complete', complete);
        for (var i = 0; i < complete.length; i++){
            var moreItems = document.createElement('li');
            $(moreItems).html(complete[i].Song + ' by ' + complete[i].Artist + ' on the album ' + complete[i].Album + `<button class='deltButton' onclick="delt(event)">delete</button>`);
            placeToGo.each(function(index, element){
            element.appendChild(moreItems);
            })
    };

};