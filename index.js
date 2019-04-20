
var audioOpen = false;
// 切换背景音乐播放状态
function toggleAudio() {
  console.log($(".audio"));
  if (audioOpen) {
    audioOpen = false;
    $("audio")[0].pause();
  } else {
    audioOpen = true;
    $("audio")[0].play();
  }
}
function getResult() {
  winner = winner
}
function jump() {
  $("#game-box").fadeIn();
  $(".false-car").animate(
    {
      opacity: 0
    },
    fadeIn
  );
  getResult();
  toggleAudio();
  fly();

  setTimeout(() => {
    $(".fly-ele").remove();
    $("#outer-box").fadeIn();
  }, fadeIn);
}

var clientHeight = document.documentElement.clientHeight;
var clientWidth = document.documentElement.clientWidth;
var intervalTimer = 0; // 号码滚动定时器
var isGaming = false; // 是否正在随机号码
$(function() {
  setStyle();
  function setStyle() {
    $("#game-box").css({
      height: clientHeight + "px"
    });
    $("#car-box").css({
      width: (clientWidth * 916) / 1297 + "px",
      top: "50%"
    });
  }

  // 无缝滚动
  function marquee(ele, interval, easingFunc) {
    var box = document.querySelector(ele);
    var listBox = document.querySelector("" + ele + " ul");
    var itemList = document.querySelectorAll("" + ele + " ul li");
    var listLength = itemList.length;
    // 获取盒子总高度
    var itemHeight = itemList[0].clientHeight;
    var moveHeight = itemHeight * listLength;
    // 克隆第一个item,加到最后
    // var firstItemClone = itemList[0].cloneNode(true)
    // listBox.appendChild(firstItemClone)
    // 进入页面开始动画
    document.querySelector(ele).parentNode.style.position = "relative";
    document.querySelector(ele).style.position = "absolute";
    var top = 0;
    // 设置定时器 循环滚动
    intervalTimer = setInterval(function() {
      // 如果top值到达临界点，重置为0
      if (top <= -moveHeight) {
        top = 0;
      }
      top -= 60;
      box.style.top = top + "px";
    }, interval);
  }

  // 开始按钮点击
  $("#go-btn").on("click", function() {
    if (!isGaming) {
      toggleAudio();
      $(".audio2")[0].play();
      isGaming = true;
      $("#go-btn").attr({
        src: "./images/icon_btn_stop@2x.png"
      });
      $("#marque-box").html("");
      for (var i = 0; i < drawNumberList.length; i++) {
        var item = drawNumberList[i];

        if (i > 0) {
          // 组合单条手机号码
          var html = `<ul class="single-line">
            <li class="phone-box">
              <div class="phone-number-item">
                ${item[0]}
              </div>
              <div class="phone-number-item">
                ${item[1]}
              </div>
              <div class="phone-number-item">
                ${item[2]}
              </div>
              <div class="phone-number-item">
                ${item[3]}
              </div>
              <div class="phone-number-item">
                ${item[4]}
              </div>
              <div class="phone-number-item">
                ${item[5]}
              </div>
              <div class="phone-number-item">
                ${item[6]}
              </div>
              <div class="phone-number-item">
                ${item[7]}
              </div>
              <div class="phone-number-item">
                ${item[8]}
              </div>
              <div class="phone-number-item">
                ${item[9]}
              </div>
              <div class="phone-number-item">
                ${item[10]}
              </div>
            </li>
          </ul>`;

          if (i === 0) {
            console.log(html);
          }
          $("#marque-box").append(html);
        }
      }
      marquee("#marque-box", 1);
    } else {
      isGaming = false;
      $(".audio2")[0].pause();
      $(".audio-clap")[0].play();
      setTimeout(() => {
        $(".audio-clap")[0].pause();
      }, 4000);
      $("#go-btn").hide();
      window.clearInterval(intervalTimer);
      $("#marque-box")[0].style.top = 0;
      $("#marque-box").html(`<ul class="single-line">
        <li class="phone-box">
          <div class="phone-number-item">
            ${winner[0]}
          </div>
          <div class="phone-number-item">
            ${winner[1]}
          </div>
          <div class="phone-number-item">
            ${winner[2]}
          </div>
          <div class="phone-number-item">
            ${winner[3]}
          </div>
          <div class="phone-number-item">
            ${winner[4]}
          </div>
          <div class="phone-number-item">
            ${winner[5]}
          </div>
          <div class="phone-number-item">
            ${winner[6]}
          </div>
          <div class="phone-number-item">
            ${winner[7]}
          </div>
          <div class="phone-number-item">
            ${winner[8]}
          </div>
          <div class="phone-number-item">
            ${winner[9]}
          </div>
          <div class="phone-number-item">
            ${winner[10]}
          </div>
        </li>
      </ul>`);
    }
  });
});
function createRandomNum() {
  // 生成 <0 或 >1的数

  var number1 = Math.random();
  var toUseNumber = Math.random();
  if (number1 < 0.5) {
    return 1 + toUseNumber;
  } else {
    return -(1 + toUseNumber);
  }
}

// 手机号码飞入动画
function phoneFlyAnim(callback) {
  // var top = createRandomNum() ;
  // var left = createRandomNum();
  // if ( top > 0 ) {
  //   left = Math.random()
  // }
  // else if ( left > 0 ) {
  //   top = Math.random()
  // }
  $(`.fly-ele`).css({
    top: createRandomNum() * clientHeight,
    left: createRandomNum() * clientWidth,
    // top: top,
    // left: left,
    opacity: 1
  });
  $(`.fly-ele`).animate(
    {
      top: "50%",
      left: "50%",
      opacity: 0.2
    },
    (1 + Math.random()) * flyDuration,
    "linear",
    phoneFlyAnim
  );
}
// 创建单个元素动画
function createAnAnimation(phoneNum) {
  var randomTop = createRandomNum();
  var randomLeft = createRandomNum();
  var createRandom = `fly-ele-${Math.random()}`;
  $("body").append(
    `<div class="fly-ele ${createRandom}" style="font-size: ${Math.random() *
      60}px">${phoneNum}</div>`
  );
  phoneFlyAnim();
}
// 飞入
function fly() {
  var c = 0;
  for (var i = 0; i < 20; i++) {
    // var c = i
    setTimeout(() => {
      console.log(c, "set");
      for (var j = c * 5; j < c * 5 + 5; j++) {
        console.log("jj", j);
        console.log(flyNumberList[j]);
        createAnAnimation(flyNumberList[j]);
      }
      c = c + 1;
    }, flyDuration / i);
  }
}
