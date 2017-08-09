//Implement jQuery in your Music History code. Every innerHTML, getElementById, getElementByClassName, event listener and XHR request. Convert 'em all.


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
    var listItem = document.createElement('li');
//        console.log('li', listItem);
        $(listItem).html($('#songI').val() + ' by ' + $('#artistsI').val() + ' on the album ' + $('#albumI').val() + `<button onclick="delt(event)">delete</button>`);
    $('#songList').append(listItem)
    //create song list variable
//    var songList = $('#songList');
//    
//    console.log('songs', songs);
//    songList.append(`<li>${songs[i]} <button onclick="delt(event)">delete</button></li>`)
//

};



//console.log($("#songList"));
//$('#songList').html(`<li> <button class="deltButton" onclick="delt(event)">delete</button></li>`);
//$("#songList").each(function (index, element){
    songs.forEach(function(item){
//    console.log('item', item);
//        console.log(element);
        $('#songList').append(`<li>${item} <button onclick="delt(event)">delete</button></li>`);
//        $(element).html(`<li>${item} <button class="deltButton" onclick="delt(event)">delete</button></li>`)
    });
//});

var XMLSongs = new XMLHttpRequest();
var placeToGo = $('#songList');
XMLSongs.onload = () => {
    this.readyState == 4 && this.status == 200;
    
//    console.log(XMLSongs.responseText);
    
    result = JSON.parse(XMLSongs.responseText).songs;
    
//    console.log('result', result);
    for (var i = 0; i < result.length; i++){
        var listItem = document.createElement('li');
//        console.log('li', listItem);
        $(listItem).html(result[i].Song + ' by ' + result[i].Artist + ' on the album ' + result[i].Album + `<button onclick="delt(event)">delete</button>`);
//        console.log(placeToGo);
        placeToGo.each(function(index, element){
            element.append(listItem);
        });
}};
    
XMLSongs.open("GET", "songs.JSON", true);
XMLSongs.send();


var r = $('.deltButton');
for (var j = 0; j < r.length; j++){
//    console.log('r', r);
//    console.log('hi');
    r[j].click(delt);
};

function delt(event){
    var f = $('#songList');
    f.each(function(arrayIndex, currentElement){
//        console.log('current', currentElement);
        currentElement.removeChild(event.currentTarget.parentNode);
    });
};


function addMore(){
    var More = new XMLHttpRequest();
    var shootIn = $('#songList');
        this.readyState == 4 && this.status == 200;

//        console.log(More.responseText);

        complete = JSON.parse(XMLSongs.responseText).songs;

        console.log('complete', complete);
        for (var i = 0; i < complete.length; i++){
            var moreItems = document.createElement('li');
            $(moreItems).html(result[i].Song + ' by ' + result[i].Artist + ' on the album ' + result[i].Album + `<button class='deltButton' onclick="delt1(event)">delete</button>`);
            placeToGo.each(function(index, element){
            element.appendChild(moreItems);
})
    };
    XMLSongs.open("GET", "moreSongs.JSON", true);
    XMLSongs.send();
}




