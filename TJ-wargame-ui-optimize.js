// ==UserScript==
// @name         铁甲突击改进脚本
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://154.8.228.108/*/main.html
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var style = document.createElement('style');
    style.innerHTML = '#Report{ top:30px; height:89%!important; }select{ text-align:center; } #CityMoney div{ height: 20px; font-size: 16px; } #CityMoney label{ font-size:16px; height:20px; line-height:20px; } #CityMoney em{ font-size:16px; height:20px; line-height:20px; } .btn{ font-size: 16px; } input{ font-family: "Arial"!important; } input.btn{ height:20px; } div{ font-family: "Arial"!important; } #RoomHeader{ padding-top :5px; height: 25px; background:rgba(0,0,0,0.7); } #RoomHeader .icon{ width: 20px; height: 20px; } #RoomTitle{ font-size: 16px; } #RoomHeader span{ height: 20px; line-height: 20px; } #RoomRound{ font-size: 16px; } .btn{ height: 20px; line-height: 20px; } input[type="checkbox" i]{ margin: 0 0.5ex; } input[type="checkbox"]{ vertical-align: -4px; } select.big{ font-size: 16px!important; height: 22px!important; } #RoundClock{ font-size: 16px; } #RoundClock span.countdown{ height: 20px; line-height: 20px; } #citylist{ background:rgba(0,0,0,0.7); height: 30px; }';
    document.head.appendChild(style);

    //var citymoney = document.getElementById('CityMoney');
    //alert(citymoney);
    document.onkeydown = detectQWER;//实现了键盘监控结果把移动界面给覆盖了，移动界面可以选择别的方式（大地图，鼠标中键）

})();


function detectQWER(event) {
    var weapons = document.querySelector('div.sel');
    if (weapons){
        var weapon_sel=document.getElementById('Weapon_'+weapons.id);
        //alert(weapon_sel[0]);
    }
    //alert($('#'+weapon_sel.id)[0].value);

    //判断select中是否存在value
function isExistOption(value) {
    var isExist = false;

      for(var i=0;i<weapon_sel.length;i++)
      {
         if(weapon_sel.options[i].value == value)
             {
                   isExist = true;
                        break;
                  }
        }
        return isExist;
}

    var e = event || window.event;
    if(e && e.keyCode==81){ // 按 q 选择蓝军装||红军装甲车（车载轻武器43），蓝军||红军步兵小队（步兵轻武器29），蓝军||红军坦克（车载轻武器43），红军直升机（车载轻武器43），红军无人战车（车载轻武器43），
        //要做的事情
        if (isExistOption(43)) {
            weapon_sel.value='43';
        }
        else if (isExistOption(29)) {
            weapon_sel.value='29';
        }
    }
    if(e && e.keyCode==87){ // 按 w 选择
        weapon_sel.value='43';
        //alert("按 w");
    }
    if(e && e.keyCode==69){ // 按 e
        weapon_sel.value='56';
        //alert("按 e");
    }
    if(e && e.keyCode==82){ // 按 r
        weapon_sel.value='73';
        //alert("按 r");
    }
}

/* TODO LIST
1.完成武器操作按键绑定；
2.展开武器选择控件，设置按键交互效果；
3.移动步数显示，加速移动速度；
4.优化地图移动方式和顺畅度；
5.小地图长亮显示，标记夺控点；
*/