const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const playlist = $('.playlist-songs')
const playing_song = $('.playing-heading-container')
const audio = $('audio')
const thumb_cd = $('.playing-thumb-cd') 
const playing_name = $('.playing-song-name')
const playing_singer = $('.playing-song-singer')

const btnPlayPause = $('.btn-play-pause')
const btnReplay = $('.btn-replay')
const btnBack = $('.btn-back')
const btnNext = $('.btn-next')
const btnShuffle = $('.btn-shuffle') 
const progress = $('.progress')

const app = {
    currentIndex: 0 ,
    isPlay: false,
    isReplay: false,
    isShuffle: false,
    songs0: [
        {
            name: 'Chiếu Thủy',
            singer: 'Decade (Prod. by Jurrivh)',
            track: './music/song0/track12.mp3',
            img: './music/song0/img12.jpg'
        },
        {
            name: 'Một Cái Gì Đó...đến Vy',
            singer: 'Gọi Là Phúc',
            track: './music/song0/track1.mp3',
            img: './music/song0/img1.jpg'
        },
        {
            name: 'Níu Tay Anh Đi Em',
            singer: 'RFL Homies x TrienChieu',
            track: './music/song0/track5.mp3',
            img: './music/song0/img5.jpg'
        },
        {
            name: 'Dù Hai Ta Ở Bất Kì Đâu',
            singer: 'Peakrozes ft Kaj',
            track: './music/song0/track6.mp3',
            img: './music/song0/img6.jpg'
        },
        {
            name: 'Chương 5 : Nhật Kí Mất Trang',
            singer: 'Peakrozes x KsoY',
            track: './music/song0/track7.mp3',
            img: './music/song0/img7.jpg'
        },
        {
            name: 'Nhân Gian',
            singer: '1NG x PHA',
            track: './music/song0/track2.mp3',
            img: './music/song0/img2.jpg'
        },
        {
            name: 'Anh',
            singer: 'Võ Trọng Đại - Prod.VoVanDuc',
            track: './music/song0/track3.mp3',
            img: './music/song0/img3.jpg'
        },
        {
            name: '2ndtime',
            singer: 'Marzuz x TSL (pacman. rework)',
            track: './music/song0/track4.mp3',
            img: './music/song0/img4.jpg'
        },
        {
            name: 'Tình Yêu Là Thế',
            singer: 'Dick & 2Can & Ngắn',
            track: './music/song0/track8.mp3',
            img: './music/song0/img8.jpg'
        },
        {
            name: 'Anh sẽ về',
            singer: 'Bãoz .ft Mưaz',
            track: './music/song0/track9.mp3',
            img: './music/song0/img9.jpg'
        },
        {
            name: 'Chương 3 : R a i n ',
            singer: ' Uyên x Peakrozes x Lus',
            track: './music/song0/track10.mp3',
            img: './music/song0/img10.jpg'
        },
        {
            name: 'Đôi Bờ',
            singer: 'DSK ft KraziNoyze',
            track: './music/song0/track11.mp3',
            img: './music/song0/img11.jpg'
        },
    ],
    songs1: [
        {
            name: 'Em là bình yên',
            singer: 'Big Leaf Beats',
            track: './music/song1/track1.mp3',
            img: './music/song1/img1.jpg'
        },
        {
            name: 'Cô ấy sẽ chẳng bao giờ biết đâu',
            singer: 'VoVanDuc',
            track: './music/song1/track3.mp3',
            img: './music/song1/img3.jpg'
        },
        {
            name: 'Khi nào mới quên 1 người',
            singer: '1 n G',
            track: './music/song1/track4.mp3',
            img: './music/song1/img4.jpg'
        },
        {
            name: 'winter wind, i hug u',
            singer: 'whisky',
            track: './music/song1/track5.mp3',
            img: './music/song1/img5.jpg'
        },
        {
            name: 'em dep nhu doa hoa',
            singer: 'e a s t',
            track: './music/song1/track6.mp3',
            img: './music/song1/img6.jpg'
        },
        {
            name: 'Sài Gòn yên bình vì cóa iem.',
            singer: 'Duckie',
            track: './music/song1/track7.mp3',
            img: './music/song1/img7.jpg'
        },
        {
            name: 'Only You',
            singer: 'Edoby Beats',
            track: './music/song1/track2.mp3',
            img: './music/song1/img2.jpg'
        },
    ],
    songs2: [
        {
            name: 'Bằng Lăng Tím',
            singer: 'J.em (NHA Cover)',
            track: './music/song2/track1.mp3',
            img: './music/song2/img1.jpg'
        },
        {
            name: 'Giản Đơn',
            singer: 'NHA x Ry2',
            track: './music/song2/track2.mp3',
            img: './music/song2/img2.jpg'
        },
        {
            name: 'Cho lần đi xa',
            singer: 'NHA',
            track: './music/song2/track3.mp3',
            img: './music/song2/img3.jpg'
        },
        {
            name: 'Ký ức trốn đi',
            singer: 'NHA',
            track: './music/song2/track4.mp3',
            img: './music/song2/img4.jpg'
        },
        {
            name: 'Luyến',
            singer: 'NHA ft. MD',
            track: './music/song2/track5.mp3',
            img: './music/song2/img5.jpg'
        },
        {
            name: 'Bum Bum Bum',
            singer: 'NHA ft.Innie',
            track: './music/song2/track6.mp3',
            img: './music/song2/img6.jpg'
        },
    ],
    songs3: [
        {
            name: 'Bây Giờ Tháng Mấy?',
            singer: 'TeA Ft. Tuyết',
            track: './music/song3/track1.mp3',
            img: './music/song3/img1.jpg'
        },
        {
            name: 'Ai Đưa Em Về',
            singer: '1nG x VoVanDuc',
            track: './music/song3/track2.mp3',
            img: './music/song3/img2.jpg'
        },
        {
            name: 'Tháng 10 cho em',
            singer: '1nG ft Tofu',
            track: './music/song3/track3.mp3',
            img: './music/song3/img3.jpg'
        },
        {
            name: 'Có 1 Người, Luôn Cười Khi Anh Đến',
            singer: 'Tofu, PC & D.Blue (Prod. by 1nG)',
            track: './music/song3/track4.mp3',
            img: './music/song3/img4.jpg'
        },
        {
            name: 'Dừng Chân Đứng Lại',
            singer: 'Namlee ft. An & Tofu (Prod. by VoVanDuc)',
            track: './music/song3/track5.mp3',
            img: './music/song3/img5.jpg'
        },
        {
            name: 'Vướng Bận',
            singer: '1nG x D.Blue',
            track: './music/song3/track6.mp3',
            img: './music/song3/img6.jpg'
        },
        {
            name: 'Đi Qua Hoa Cúc',
            singer: 'TeA ft. VoVanDuc',
            track: './music/song3/track7.mp3',
            img: './music/song3/img7.jpg'
        },
        {
            name: 'Hương Rừng',
            singer: 'TeA ft. Mr Shyn (Prod. VoVanDuc)',
            track: './music/song3/track8.mp3',
            img: './music/song3/img8.jpg'
        },
        {
            name: 'Lãng Du',
            singer: 'ToFu ft. An (Prod. by VoVanDuc)',
            track: './music/song3/track9.mp3',
            img: './music/song3/img9.jpg'
        },
        {
            name: 'Qua Những Tiếng Ve',
            singer: 'ToFu ft. Xesi & Urabe (Prod. by VoVanDuc)',
            track: './music/song3/track10.mp3',
            img: './music/song3/img10.jpg'
        },
        {
            name: 'CAFE ',
            singer: 'URABE X PC X VOVANDUC',
            track: './music/song3/track11.mp3',
            img: './music/song3/img11.jpg'
        },
    ],   
    cdThumbAnimate : thumb_cd.animate(
        [{transform: 'rotate(360deg)'}], 
        {duration: 10000, iterations: Infinity}
    ),

    renderPlaylist: function(songs){
        const htmls = songs.map(song => {
            return `
            <div class="playlist-song-item">
                <div class="song-item-img" style="background-image: url(${song.img})"></div>

                <div class="playlist-song-item-desc">
                    <p class="song-item-name">${song.name}</p>
                    <p class="song-item-singer">${song.singer}</p>
                    </div>
                <i class="song-item-ellipsis fa-solid fa-ellipsis"></i>    
            </div>
            `
        })
        playlist.innerHTML = htmls.join('') 
        app.cdThumbAnimate.pause()



    }, 
    renderCurrentSong: function(songs){
        const now_song_in_list = $(`.playlist-song-item:nth-child(${this.currentIndex + 1})`)  
        now_song_in_list.classList.add('active')
        
        audio.src = songs[this.currentIndex].track
        thumb_cd.style.backgroundImage = `url('${songs[this.currentIndex].img}')`
        playing_name.textContent = songs[this.currentIndex].name
        playing_singer.textContent = songs[this.currentIndex].singer
    },
    
    playSong: () => {
        audio.play()
        app.cdThumbAnimate.play()
    },
    pauseSong: () => {
        audio.pause()
        app.cdThumbAnimate.pause()
    },
    Play_Pause: function(){
        btnPlayPause.onclick = function(){
            if (app.isPlay){
                btnPlayPause.classList.add("pausing")
                btnPlayPause.classList.remove("playing")
                app.isPlay=false;
                app.pauseSong();
                
            }
            else{
                btnPlayPause.classList.remove("pausing")
                btnPlayPause.classList.add("playing")
                app.isPlay=true;
                app.playSong();
            }
        }
    },  
    timeProgress: function(){
        progress.onchange = function(){
            audio.currentTime = progress.value/100 * audio.duration
            if (!app.isPlay){
                btnPlayPause.classList.remove("pausing")
                btnPlayPause.classList.add("playing")
                app.isPlay=true;
                app.playSong();
            }
        }

        setInterval(()=>{
            if(audio.currentTime != 0 && audio.currentTime != NaN)
            progress.value = audio.currentTime / audio.duration * 100;
        }, 500)
    },
    nextSong: (songs) => {
        if (app.currentIndex === songs.length- 1)
            app.currentIndex = 0;
        else app.currentIndex += 1; 
        app.renderPlaylist(songs);
        app.renderCurrentSong(songs)

        if (!app.isPlay){
            btnPlayPause.classList.remove("pausing")
            btnPlayPause.classList.add("playing")
            app.isPlay=true;
        }
        app.playSong()
    },
    backSong: (songs) => {
        if (app.currentIndex === 0 )
            app.currentIndex = songs.length-1;
        else app.currentIndex--;
        app.renderPlaylist(songs);
        app.renderCurrentSong(songs)
        if (!app.isPlay){
            btnPlayPause.classList.remove("pausing")
            btnPlayPause.classList.add("playing")
            app.isPlay=true;
        }
        app.playSong()
    },
    nextSongFunc: (songs) => {
        if(app.isReplay) app.currentIndex = app.currentIndex - 1;
        else if (app.isShuffle) {
            var randomIndex = Math.round(Math.random()*songs.length)
            while(randomIndex == app.currentIndex - 1
                    || randomIndex == app.currentIndex)
                randomIndex = Math.round(Math.random()*songs.length)
            app.currentIndex = randomIndex; 
        }
        app.nextSong(songs);
    },
    backSongFunc: (songs) => {
        if(app.isReplay) app.currentIndex = app.currentIndex + 1;
        else if (app.isShuffle) {
            var randomIndex = Math.round(Math.random()*songs.length)
            while(randomIndex == app.currentIndex +1
                    || randomIndex == app.currentIndex)
                randomIndex = Math.round(Math.random()*songs.length)
            app.currentIndex = randomIndex; 
        }
        app.backSong(songs);
    },
    back_nextFunc: (songs) => {
        btnNext.onclick = () => app.nextSongFunc(songs)
        btnBack.onclick = () => app.backSongFunc(songs)

        audio.onended = () => app.nextSongFunc(songs)
    },
    btnOption: () => {
        btnReplay.onclick = () => {
            if (app.isReplay) btnReplay.classList.remove('active')
            else {
                btnReplay.classList.add('active')
                if (app.isShuffle) {
                    btnShuffle.classList.remove('active')
                    app.isShuffle = !app.isShuffle
                }
            }
            app.isReplay = !app.isReplay;
        }
        btnShuffle.onclick = () => {
            if (app.isShuffle) btnShuffle.classList.remove('active')
            else {
                btnShuffle.classList.add('active')
                if(app.isReplay) {
                    btnReplay.classList.remove('active')
                    app.isReplay = !app.isReplay
                }
            }
            app.isShuffle = ! app.isShuffle
        }
    },
    selectSong: (songs) => {
        const songsItems = $$('.playlist-song-item')
        for (let i = 0; i < songsItems.length; i++) {
            songsItems[i].onclick = () => {
                app.currentIndex = i-1;
                btnNext.click();
            }
        }
    }, 
    start: function(songs) {
        this.renderPlaylist(songs);
        this.renderCurrentSong(songs)
        this.Play_Pause()
        this.timeProgress()
        this.back_nextFunc(songs)
        this.btnOption()
        setInterval(()=>this.selectSong(songs),200)
    }
}

function playListClick(i){
    playerWaiting.style.display = 'none'
    app.currentIndex=0;
    if(app.isPlay) btnPlayPause.click()
    if(app.isReplay) btnReplay.click()
    if(app.isShuffle) btnShuffle.click()
    if(i==0) {
        app.start(app.songs0)
        playlistItems[i].classList.add('playlist-item--active')
        const songItemActive = $('.playlist-song-item.active')
        songItemActive.style.backgroundColor = 'rgba(42,40,40,0.3)'
        btnPlayPause.click()
    }
    else if(i==1) {
        app.start(app.songs1)
        playlistItems[i].classList.add('playlist-item--active')
        const songItemActive = $('.playlist-song-item.active')
        songItemActive.style.backgroundColor = 'rgb(78,168,222,0.3)'
        btnPlayPause.click()

    }
    else if(i==2) {
        app.start(app.songs2)
        playlistItems[i].classList.add('playlist-item--active')
        const songItemActive = $('.playlist-song-item.active')
        songItemActive.style.backgroundColor = 'rgb(133,24,42,0.3)'
        btnPlayPause.click()

    }
    else if(i==3) {
        app.start(app.songs3)
        playlistItems[i].classList.add('playlist-item--active')
        const songItemActive = $('.playlist-song-item.active')
        songItemActive.style.backgroundColor = 'rgb(165,148,249,0.3)'
        btnPlayPause.click()
    }
    for (let j = 0; j < playlistItems.length; j++) {
        if(j!=i) playlistItems[j].classList.remove('playlist-item--active')
    }
}
const playlistItems  = $$('.playlist-item')
const playlistItemsMobile = $$('.playlist-item-mobile') 
const playerWaiting = $('.player-waiting')
const playListnav = $$('.playlist-mobile')
for (let i = 0; i < playlistItems.length; i++) {
    playlistItems[i].onclick = () => playListClick(i)
    playlistItemsMobile[i].onclick = () => playListClick(i)
    playListnav[i].onclick =() => playListClick(i)
}


