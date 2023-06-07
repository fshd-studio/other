const player = new Plyr('video', { 
    captions: { active: true, update: true, language: 'auto',  },
});

// 判断是否能够自动播放
if (player.autoplay) {
  // 播放器对象加载完成后自动播放视频
  player.on('ready', function() {
    player.play();
  });
} else {
  // 显示自动播放被禁用时的提示信息
  const message = document.getElementById('autoplay-message');
  message.style.display = 'block';
}

// 手动启动视频播放
function playVideo() {
  const video = document.querySelector('video');
  video.play();
  const message = document.getElementById('autoplay-message');
  message.style.display = 'none';
}

// 设置视频循环播放
player.on('ended', function() {
  player.play();
});

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
 var title1 = 'PSVD'
 var title2 = `
 PSVD                                               
 `
 var content = `
 版 本 号：1.2
 更新日期：2023-05-21
 
 `
 console.log(`%c${title1} %c${title2}
 %c${content}`, styleTitle1, styleTitle2, styleContent)