# TJ-wargame-tm-script
铁甲突击群比赛专用UI油猴优化脚本

## TODO List

- [x] 绑定操作按键
  - [x] `QWER`键绑定至武器列表1-4
  - [ ] `D`键绑定至引导武器
  - [ ] `TAB`键切换同格算子
  - [ ] `1234`切换算子状态
- [ ] 展开武器选择控件，在下导航条并列显示
- [ ] 增加算子可视范围显示，地图上可见格内添加颜色遮罩
- [ ] 移动步数显示，加速移动速度
- [ ] 优化地图移动方式和顺畅度
- [ ] 小地图长亮固定页面显示，半透明且显示主次夺控点

## BUG List：

  1. 实现了键盘监控结果把移动界面给覆盖了，移动界面可以选择别的方式（大地图，鼠标中键）
  
  2. 对步兵按数字键4选择引导后，键盘控制失效，需要鼠标重新选择'机动'才能恢复。
  
  3. 按tab键会使焦点到浏览器其他地方导致切换单位失效，需要多按几次,或者点击鼠标使焦点回到游戏界面，或者F11全屏显示网页
  
