window.addEventListener('scroll',function(){
    let tou = document.querySelector('.q-header'); 
    tou.classList.toggle("q-header-change", window.scrollY>0);
})

//轮播图
var show = document.querySelector("#showText");
var imgList = document.getElementsByTagName("img");
show.style.width = imgList.length * 350+ "px";
var pot = document.getElementById("pot");
var liList = document.getElementById("pot").getElementsByTagName("li");
var timer;
move();

function move() {
  clearInterval(timer);
  var index = 0;
  next.onclick = function() {
      clearInterval(timer);
      index++;
      if (index === 5) {
          setTimeout(function() {
              show.style.transition = "none";
              show.style.left = 0;
              index = 0;
          },0);
      }
      show.style.left = -index * 850 + "px";
      run();
  }

  pre.onclick = function() {
      clearInterval(timer);
      if (index === 0) {
          show.style.transition = "none";
          show.style.left = -2551 + "px";
          setTimeout(function() {
              index = 3;
              show.style.left = -index * 850 + "px";
          }, 0)
          changeColor(3);  
      } else {
          index--;
          show.style.left = -index * 850 + "px";
          changeColor(index);          
      }
  }
}

var left = 0;
changeLeft();
// run();

//定时器的回调函数
function run() {
    clearInterval(timer);
    if (left <= -2551) {
        show.style.left = "0px";
        left = 0;
    }
    var n = 15;
    if (left % 850 == 0) {
        n = 2000;
    }
    let index = 0;
    index = Math.floor(-left / 850);
    changeColor(index);
    changeImg();
    changeLeft();
    left -= 10;
    timer = setInterval(run, n);

}

//设置圆点颜色的变化
function changeColor(index) {
  for (var i = 0; i < liList.length; i++) {
    liList[i].firstChild.style.backgroundColor = "";
  }
  liList[index].firstChild.style.backgroundColor = "#1140e3";
}

//设置点击圆点事件
function changeImg() {
    for (let i = 0; i < liList.length; i++) {
        liList[i].onclick = function() {
            clearInterval(timer);
            left = -i * 850;
            changeColor(i);
            changeLeft();
            run();
        }
    }
}

//改变位置
function changeLeft() {
    show.style.left = left + "px";
}

//文字
var show = document.querySelector("#show");
var imgList = document.getElementsByTagName("img");
show.style.width = imgList.length * 850 + "px";
var pot = document.getElementById("pot");
var liList = document.getElementById("pot").getElementsByTagName("li");
var timer;
move();

function move() {
  clearInterval(timer);
  var index = 0;
  next.onclick = function() {
      clearInterval(timer);
      index++;
      if (index === 5) {
          setTimeout(function() {
              show.style.transition = "none";
              show.style.left = 0;
              index = 0;
          },0);
      }
      show.style.left = -index * 850 + "px";
      run();
  }

  pre.onclick = function() {
      clearInterval(timer);
      if (index === 0) {
          show.style.transition = "none";
          show.style.left = -2551 + "px";
          setTimeout(function() {
              index = 3;
              show.style.left = -index * 850 + "px";
          }, 0)
          changeColor(3);  
      } else {
          index--;
          show.style.left = -index * 850 + "px";
          changeColor(index);          
      }
  }
}

var left = 0;
changeLeft();
run();

//定时器的回调函数
function run() {
    clearInterval(timer);
    if (left <= -2551) {
        show.style.left = "0px";
        left = 0;
    }
    var n = 15;
    if (left % 850 == 0) {
        n = 2000;
    }
    let index = 0;
    index = Math.floor(-left / 850);
    changeColor(index);
    changeImg();
    changeLeft();
    left -= 10;
    timer = setInterval(run, n);

}

//设置圆点颜色的变化
function changeColor(index) {
  for (var i = 0; i < liList.length; i++) {
    liList[i].firstChild.style.backgroundColor = "";
  }
  liList[index].firstChild.style.backgroundColor = "#1140e3";
}

//设置点击圆点事件
function changeImg() {
    for (let i = 0; i < liList.length; i++) {
        liList[i].onclick = function() {
            clearInterval(timer);
            left = -i * 850;
            changeColor(i);
            changeLeft();
            run();
        }
    }
}

//改变位置
function changeLeft() {
    show.style.left = left + "px";
}