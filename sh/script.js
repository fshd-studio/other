// 获取url/?sh=中的参数值
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURIComponent(r[2]);
    }
    return null;
}

// 页面加载完成后执行的函数
window.onload = function() {
    // 获取url中的搜索框值
    var searchText = getQueryString("sh");
    if (searchText) {
        // 将搜索框值填入搜索框
        document.getElementById("search-box").value = searchText;
        // 点击对应的搜索按钮
        switch (getQueryString("engine")) {
            case "baidu":
                search("https://www.baidu.com/s?wd=" + encodeURIComponent(searchText) + "&ie=utf-8", true);
                break;
            case "google":
                search("https://www.google.com/search?q=" + encodeURIComponent(searchText), true);
                break;
            case "bing":
                search("https://www.bing.com/search?q=" + encodeURIComponent(searchText), true);
                break;
            case "yahoo":
                search("https://search.yahoo.com/search?p=" + encodeURIComponent(searchText), true);
                break;
            case "sogou":
                search("https://www.sogou.com/web?query=" + encodeURIComponent(searchText), true);
                break;
            case "github":
                search("https://github.com/search?q=" + encodeURIComponent(searchText) + "&type=code", true);
                break;
            case "360":
                search("https://www.so.com/s?ie=utf-8&q=" + encodeURIComponent(searchText), true);
                break;
        }
    }
};

// 搜索函数
function search(url, newTab) {
    // 获取搜索框的值
    var searchText = document.getElementById("search-box").value;
    if (!searchText) {
        alert("搜索框不能为空");
        return;
    }
    // 打开新页面搜索
    if (newTab) {
        window.open(url, "_blank");
    } else {
        window.location.href = url;
    }
}

// 绑定事件
document.getElementById("search-btn-baidu").onclick = function() {
    search("https://www.baidu.com/s?wd=" + encodeURIComponent(document.getElementById("search-box").value) + "&ie=utf-8", true);
};
document.getElementById("search-btn-google").onclick = function() {
    search("https://www.google.com/search?q=" + encodeURIComponent(document.getElementById("search-box").value), true);
};
document.getElementById("search-btn-bing").onclick = function() {
    search("https://www.bing.com/search?q=" + encodeURIComponent(document.getElementById("search-box").value), true);
};
document.getElementById("search-btn-yahoo").onclick = function() {
    search("https://search.yahoo.com/search?p=" + encodeURIComponent(document.getElementById("search-box").value), true);
};
document.getElementById("search-btn-sogou").onclick = function() {
    search("https://www.sogou.com/web?query=" + encodeURIComponent(document.getElementById("search-box").value), true);
};
document.getElementById("search-btn-github").onclick = function() {
    search("https://github.com/search?q=" + encodeURIComponent(document.getElementById("search-box").value) + "&type=code", true);
};
document.getElementById("search-btn-360").onclick = function() {
    search("https://www.so.com/s?ie=utf-8&q=" + encodeURIComponent(document.getElementById("search-box").value), true);
};

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
  
var title1 = 'PSWBSH'
var title2 = `PSWBSH                                               
`
var content = `
...?
`
  
var info = `
版 本 号：1.4
更新日期：2023-06-01
版权所有 © 2023 Phantom-Shadow. All Rights Reserved.
`
console.log(`%c${title1} %c${title2}
%c${content} %c${info}`, styleTitle1, styleTitle2, styleContent, styleinfo)