// proto js

function marquee ( ele, interval, easingFunc ) {

  var box = document.querySelector(ele)
  var listBox = document.querySelector(''+ ele +' ul')

  var itemList = document.querySelectorAll(''+ ele +' ul li')

  var listLength = itemList.length

  // 获取盒子总高度
  var itemHeight = itemList[0].clientHeight
  var moveHeight = itemHeight*listLength

  // 克隆第一个item,加到最后
  // var firstItemClone = itemList[0].cloneNode(true)
  // listBox.appendChild(firstItemClone)

  // 进入页面开始动画
  document.querySelector(ele).parentNode.style.position = 'relative'
  document.querySelector(ele).style.position = 'absolute'

  var top = 0;

  // 设置定时器 循环滚动
  interval = setInterval(function(){
    console.log(222222)
    // 如果top值到达临界点，重置为0
    if ( top <= -moveHeight ) {
      top = 0
    } 
    top-= 100

    box.style.top = top + 'px'
    
  },interval)

}