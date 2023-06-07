const audioPlayer = document.getElementById("audio-player");
const audioList = document.getElementById("audio-list");
const lyricContainer = document.getElementById("lyric");
let currentAudioIndex = 0;
let timer;

const player = new Plyr("#my-audio", {
  autoplay: true,
});

// 定义音频列表数组
const audioData = [
    {
        title: "你被骗了",
        src: "https://fast-waller.github.io/resource/mp3/nggyura.mp3",
        lyricSrc: "https://fast-waller.github.io/resource/lrc/nggyura.lrc"
    },
    {
        title: "平凡之路",
        src: "https://fast-waller.github.io/resource/mp3/pfzl.mp3",
        lyricSrc: "https://fast-waller.github.io/resource/lrc/pfzl.lrc"
    },
    {
        title: "普通爱情故事",
        src: "https://fast-waller.github.io/resource/mp3/ptaqgs.mp3",
        lyricSrc: "https://fast-waller.github.io/resource/lrc/ptaqgs.lrc"
    }
];

// 根据音频数据生成音频列表
function generateAudioList() {
    audioData.forEach((item, index) => {
        const audioItem = document.createElement("div");
        audioItem.classList.add("audio-item");
        audioItem.innerText = item.title;
        if (index === currentAudioIndex) {
            audioItem.classList.add("active");
        }
        audioItem.addEventListener("click", () => {
            // 切换音频源
            currentAudioIndex = index;
            switchAudio();
        });
        audioList.appendChild(audioItem);
    });
}

// 渲染歌词
function renderLyric(lyric) {
    lyricContainer.innerHTML = "";
    clearInterval(timer);
    const lines = lyric.split("\n");
    const regex = /\[(\d{2}):(\d{2})\.(\d{2,3})\](.+)/;
    lines.forEach(line => {
        const matches = regex.exec(line);
        if (matches) {
            const minutes = parseInt(matches[1]);
            const seconds = parseInt(matches[2]);
            const milliseconds = parseInt(matches[3]);
            const content = matches[4];
            const startTime = minutes * 60 + seconds + milliseconds / 1000;
            const lineEle = document.createElement("div");
            lineEle.classList.add("lyric-line");
            lineEle.dataset.time = startTime;
            lineEle.innerText = content;
            lyricContainer.appendChild(lineEle);
        }
    });
    timer = setInterval(() => {
        const currentTime = audioPlayer.currentTime;
        const currentLine = Array.from(lyricContainer.children).find(line => {
            return line.dataset.time <= currentTime && line.nextElementSibling && line.nextElementSibling.dataset.time > currentTime;
        });
        if (currentLine) {
            Array.from(lyricContainer.children).forEach(line => {
                line.classList.remove("current");
            });
            currentLine.classList.add("current");
            lyricContainer.scrollTop = currentLine.offsetTop - lyricContainer.offsetHeight / 2;
        }
    }, 100);
}

// 切换音频
function switchAudio() {
    // 切换音频源
    audioPlayer.src = audioData[currentAudioIndex].src;
    // 设置播放速率为1
    audioPlayer.playbackRate = 1;
    // 移除所有选中状态
    document.querySelectorAll(".audio-item").forEach(audioItem => {
        audioItem.classList.remove("active");
    });
    // 添加选中状态
    document.querySelectorAll(".audio-item")[currentAudioIndex].classList.add("active");
    // 更新音频标题
    document.title = audioData[currentAudioIndex].title + " - PSMSC";
    // 渲染歌词
    getLyric();
}

// 获取歌词
function getLyric() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            renderLyric(xhr.responseText);
        }
    };
    xhr.open("GET", audioData[currentAudioIndex].lyricSrc);
    xhr.send();
}

// 切换播放模式
function switchPlayMode() {
    const playModeIcon = document.getElementById("play-mode");
    if (audioPlayer.loop) {
        audioPlayer.loop = false;
        playModeIcon.innerText = "🔁";
    } else {
        audioPlayer.loop = true;
        playModeIcon.innerText = "🔂";
    }
}

// 初始化
function init() {
    generateAudioList();
    switchAudio();
    const player = new Plyr("#audio-player");
    const playModeButton = document.getElementById("play-mode");
    playModeButton.addEventListener("click", () => {
        switchPlayMode();
    });
    audioPlayer.addEventListener("ended", () => {
        currentAudioIndex = (currentAudioIndex + 1) % audioData.length;
        switchAudio();
    });
}

window.onload = init;

  //控制台输出
var styleTitle1 = `
font-size: 20px;
font-weight: 600;
color: rgb(244,167,89);
`
var styleTitle2 = `
font-size:150px;
color: rgb(244,167,89);
`
var styleContent = `
color: rgb(30,152,255);
`

var styleinfo = `
color: rgb(255, 102, 0);
`

var title1 = 'PSMSC'
var title2 = `
PSMSC                                               
`
var content = `
使用纯js，css，html构建
使用的是plyr播放器（https://github.com/sampotts/plyr ）
`

var info = `
版 本 号：3.2
更新日期：2023-06-02
版权所有 © 2023 Phantom-Shadow. All Rights Reserved.
`
console.log(`%c${title1} %c${title2}
%c${content} %c${info}`, styleTitle1, styleTitle2, styleContent, styleinfo)