// ==UserScript==
// @name         下棋的游戏改进脚本
// @namespace    http://jaredlew.jw/
// @version      0.1
// @description  try to take over the world!
// @author       Jared Lew
// @match        http://154.8.228.108/*/main.html
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var style = document.createElement('style');
    style.innerHTML = '#Report{ top:30px; height:89%!important; }select{ text-align:center; } #CityMoney div{ height: 20px; font-size: 16px; } #CityMoney label{ font-size:16px; height:20px; line-height:20px; } #CityMoney em{ font-size:16px; height:20px; line-height:20px; } .btn{ font-size: 16px; } input{ font-family: "Arial"!important; } input.btn{ height:20px; } div{ font-family: "Arial"!important; } #RoomHeader{ padding-top :5px; height: 25px; background:rgba(0,0,0,0.7); } #RoomHeader .icon{ width: 20px; height: 20px; } #RoomTitle{ font-size: 16px; } #RoomHeader span{ height: 20px; line-height: 20px; } #RoomRound{ font-size: 16px; } .btn{ height: 20px; line-height: 20px; } input[type="checkbox" i]{ margin: 0 0.5ex; } input[type="checkbox"]{ vertical-align: -4px; } select.big{ font-size: 16px!important; height: 22px!important; } #RoundClock{ font-size: 16px; } #RoundClock span.countdown{ height: 20px; line-height: 20px; } #citylist{ background:rgba(0,0,0,0.7); height: 30px; }';
    document.head.appendChild(style);

})();