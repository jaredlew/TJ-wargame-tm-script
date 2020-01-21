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
    document.onkeydown = detectQWER; //实现了键盘监控结果把移动界面给覆盖了，移动界面可以选择别的方式（大地图，鼠标中键）
})();


(function detectQWER(event) {
    var weapon = document.querySelector('div.sel');

    if (weapon) {
        var weapon_sel=document.getElementById('Weapon_'+weapon.id);
        //alert(weapon_sel[0]);
    } //alert($('#'+weapon_sel.id)[1].value);

    var weaponlist=new Array();//自动读取所有option中的value

    for(var i=0;i<weapon_sel.length;i++) {
        if(weapon_sel.options[i].value!='0')
        {
            weaponlist.push(parseInt(weapon_sel.options[i].value));
        }
    }

    weaponlist.sort();
    var e = event || window.event;

    if(e && e.keyCode==81){ // 按 q
        //要做的事情
        weapon_sel.value=String(weaponlist[0]);
    }

    if(e && e.keyCode==87) { // 按 w
        weapon_sel.value=String(weaponlist[1]);
        //alert("按 w");
    }

    if(e && e.keyCode==69){ // 按 e
        weapon_sel.value=String(weaponlist[2]);
        //alert("按 e");
    }

    if(e && e.keyCode==82){ // 按 r
        weapon_sel.value=String(weaponlist[3]);
        //alert("按 r");
    }

    //if(e && e.keyCode==68){ // 按 d
        //var weapon_stat=document.getElementById('ObjPass');}

    //1234键改变状态

    if(e && e.keyCode==49){ // 按 1
        $('#ObjPass').val('0').change();//这样才能调用onchange的函数
    }

    if(e && e.keyCode==50){ // 按2
        $('#ObjPass').val('1').change();
    }

    if(e && e.keyCode==51){ // 按 3
        $('#ObjPass').val('2').change();
    }

    if(e && e.keyCode==52){ // 按4
        $('#ObjPass').val('3').change();//这里有一个bug：选择引导后键盘控制失效，需要重新选择'机动'才能恢复。
    }

    //tab键切换单位
    if(e && e.keyCode==9){ // 按 tab
        var pos = weapon.getAttribute('pos');//当前选中单位的pos值
        var weapons=document.querySelectorAll('div.my');//我拥有的所有单位  nodelist  getElementsByClassName
        var weapons_array = new Array();
        for(i = 0;i<weapons.length;i++) {
            if(weapons[i].getAttribute('pos')==pos) {
                weapons_array.push(weapons[i]);//weapons_array只保留同格的单位
            }
        }
    //alert(document.getElementById(weapons_array[0].id).className);
    //document.getElementById(weapons_array[0].id).className=document.getElementById(weapons_array[0].id).className.split(' sel')[0];
    //alert(document.getElementById(weapons_array[0].id).className);
    //document.getElementById(weapons_array[1].id).className=document.getElementById(weapons_array[1].id).className+' sel';
    //alert(document.getElementById('ObjSel').children[0]);

        for(i = 0;i<weapons_array.length;i++) {
            if(weapon.id==weapons_array[i].id)
            {
                break;
            }
        }//找到现在的单位是哪个
        document.getElementById('ObjSel').children[(i+1)%weapons_array.length].click();//weapons_array[(i+1)%weapons_array.length].id);
        document.getElementById('ObjSel').children[(i+1)%weapons_array.length].contextmenu(); //观察网页源码，发现需要调用hit和showmenuie5两个函数
    }
})();

//README:
//bugs：
//    1.实现了键盘监控结果把移动界面给覆盖了，移动界面可以选择别的方式（大地图，鼠标中键）
//    2.对步兵按数字键4选择引导后，键盘控制失效，需要鼠标重新选择'机动'才能恢复。
//    3.按tab键会使焦点到浏览器其他地方导致切换单位失效，需要多按几次
