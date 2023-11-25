// Write your javascript here
    let sou = ["Let-Me-Love-You_320(PaglaSongs).mp3","Let Me Down Slowly Alec Benjamin 320 Kbps.mp3","Attention-(PagalWorld).mp3"];
    let pic = ["justin.jpg","let me down.jpg","Attention.png"];
    let title = ["Let me love you","Let me down slowly","Attention"]
    let artist = ["DJ Snake/Justin Beiber","Alec Benjamin","Charlie Puth"]
    let d = ["03:25","02:49","03:51"];
    tracks = [
        {
            name: "Let me down slowly",
            artist: "Alec Benjamin",
            cover: "alec.jpg",
            source: "Let me down slowly.mp3",
        },
        {
            name: "Let me love you",
            artist: "DJ Snake/Justin Beiber",
            cover: "dj.jpg",
            source: "Let me love you.mp3",
        },
        {
            name: "Perfect",
            artist: "Ed Sheeran",
            cover: "ed.jpg",
            source: "Perfect.mp3",
        },
    ];
    
    song.onloadedmetadata = function(){
        progress.max = song.duration;
        progress.value =  song.currentTime;
    }

    function playPause(){
        if(play.classList.contains("play")){
            song.play();  
            play.classList.remove("play");
            play.classList.add("pause");
           document.getElementById("cntrlIcon").className = "fa-solid fa-pause";
        }
        else{
            song.pause();
            play.classList.remove("pause");
            play.classList.add("play");
            document.getElementById("cntrlIcon").className = "fa-solid fa-play";
        }
        
    }
    
    if(song.play()){
        setInterval(()=>{
            progress.value = song.currentTime;
            progress.value =  song.currentTime;
            let curr = song.currentTime;
            let min =  Math.floor(curr/60);
            let sec = Math.floor(curr%60);
            if(min<10 && sec >= 10){
                document.getElementById("current-time").innerHTML = `0${min}:${sec}`;
            }
            else if(min<10 && sec < 10){
                document.getElementById("current-time").innerHTML = `0${min}:0${sec}`;
            }
            else{
                document.getElementById("current-time").innerHTML = `${min}:${sec}`;
            }

        },500);
        
    }

    progress.onchange = function(){
        song.play();
        play.classList.remove("play");
        play.classList.add("pause");
        song.currentTime = progress.value;
        document.getElementById("cntrlIcon").className = "fa-solid fa-pause";
    }

    // side buttons
    let i = 0;
    let j ;
    let k ;
    function previous(){
       if(i==0){
        j = 2;
       }        
       else{
        j = i-1;
       }
       let s = tracks[j].source;
       document.getElementById("song").src = sou[j];
       document.getElementById("e").src = pic[j];
       document.getElementById("title").innerHTML = title[j];
       document.getElementById("artist").innerHTML = artist[j];
       document.getElementById("d").innerHTML = d[j];
       i = j;
       song.play();
       document.getElementById("cntrlIcon").className = "fa-solid fa-pause";
       play.classList.remove("play");
       play.classList.add("pause");
        
    }

    function next(){
        if(i==2){
         k = 0;
        }        
        else{
         k = i+1;
        }
        let s = tracks[k].source;
        document.getElementById("song").src = sou[k];
        document.getElementById("e").src = pic[k];
        document.getElementById("title").innerHTML = title[k];
        document.getElementById("artist").innerHTML = artist[k];
        document.getElementById("d").innerHTML = d[k];
        i = k;
        song.play();
        document.getElementById("cntrlIcon").className = "fa-solid fa-pause";
        play.classList.remove("play");
        play.classList.add("pause");
     }
    
     
     
     
     


