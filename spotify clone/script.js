console.log("Welcome to AList")

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName:"Suzume no tojimari", filePath: "songs/1.mp3", coverPath: "cover/2.jpg"},
    {songName:"Let me Love You", filePath: "songs/2.mp3", coverPath: "cover/2.jpg"},
    {songName:"Closer - The Chainsmokers", filePath: "songs/3.mp3", coverPath: "cover/2.jpg"},
    {songName:"Ellie Goulding - Love Me Like You Do", filePath: "songs/4.mp3", coverPath: "cover/2.jpg"},
    {songName:"Lauv - I Like Me Better", filePath: "songs/5.mp3", coverPath: "cover/2.jpg"},
    {songName:"Maroon 5 - Sugar", filePath: "songs/6.mp3", coverPath: "cover/2.jpg"},
    {songName:"PUBLIC - Make You Mine", filePath: "songs/7.mp3", coverPath: "cover/2.jpg"},
    {songName:"Stephen Sanchez - Until I Found You", filePath: "songs/8.mp3", coverPath: "cover/2.jpg"},
    {songName:"Photograph", filePath: "songs/9.mp3", coverPath: "cover/2.jpg"},
    {songName:"Photograph", filePath: "songs/9.mp3", coverPath: "cover/2.jpg"},
    {songName:"Photograph", filePath: "songs/9.mp3", coverPath: "cover/2.jpg"},
    {songName:"Photograph", filePath: "songs/9.mp3", coverPath: "cover/2.jpg"},
    {songName:"Photograph", filePath: "songs/9.mp3", coverPath: "cover/2.jpg"}
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    //Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

// const makeAllPause = ()=>{
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//         element.classList.remove('fa-circle-play');
//         element.classList.add('fa-circle-pause');
//     })
// }

// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//     element.addEventListener('click', (e)=>{
//         makeAllPlays();
//         songIndex = parseInt(e.target.id);
//         e.target.classList.remove('fa-circle-play');
//         e.target.classList.add('fa-circle-pause');
//         audioElement.src = `songs/${songIndex+1}.mp3`;
//         masterSongName.innerText = songs[songIndex].songName;
//         audioElement.currentTime = 0;
//         audioElement.play();
//         gif.style.opacity = 1;
//         masterPlay.classList.remove('fa-circle-play');
//         masterPlay.classList.add('fa-circle-pause');
//     })
// })

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        if(audioElement.paused || audioElement.currentTime<=0){
            // songContinue();
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
}
else{
    // makeAllPause();
    // songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-circle-pause');
    e.target.classList.add('fa-circle-play');
    audioElement.pause();
    gif.style.opacity = 0;
    masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
}})
})


document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=12){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 12;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

