const player = new Plyr("#my-audio", {
    autoplay: true,
    loop: {
      active: true
    },
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
var title1 = 'PSSD'
var title2 = `
PSSD                                               
`
var content = `
版 本 号：1.2
更新日期：2023-05-21

`
console.log(`%c${title1} %c${title2}
%c${content}`, styleTitle1, styleTitle2, styleContent)