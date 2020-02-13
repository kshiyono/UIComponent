$(function(){

  $('.logo2').each(function() {
    if ($(window).scrollTop() >= $(this).offset().top - $(window).height())
      $(this).addClass("txt-effect");
  });

  //******************追　加******************//
  var
  cursor = $(".cursor"),
  cWidth = 20, //カーソルの大きさ
  mouseX = 0, //マウスのX座標
  mouseY = 0; //マウスのY座標

  $(document).on('mousemove', function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
    cursor.css({
      //カーソルの真ん中に座標軸が来るよう、
      //カーソルの大きさの半分を引きます
      left: mouseX - (cWidth / 2),
      top: mouseY - (cWidth / 2)
    })
  });

  const stalker = document.getElementById('stalker');

  //上記のdivタグをマウスに追従させる処理
  document.addEventListener('mousemove', function (e) {
      stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
  });
  //******************追　加******************//

  $('#top-mini2').bgSwitcher({
     images: ['img/../img/top.1.jpg','img/../img/top.2.jpg','img/../img/top.3.jpg'],
  　 interval: 5000,
  　 loop: true,
  　 shuffle: true,
  　 effect: "fade", // fade,blind,clip,slide,drop,hide
  　 duration: 2000,
  　 easing: "swing" // linear,swing
  });


//スクロールして、コンテンツを表示
  $(window).scroll(function (){
      $('.fadein').each(function(){
          var elemPos = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 80){
              $(this).addClass('scrollin');
              $('.box p').removeClass('move');
          }else{
            $(this).removeClass('scrollin');
            $('.box p').addClass('move');
          }
      });
  });



//スクロールしてタイトルを左からスライド表示
  $(window).on('load scroll', function() {
    var scrollPos = $(this).scrollTop();
    if ( scrollPos > 50 ) {
      $('#top-mini').addClass('mini'),
      $('.head').addClass('opacity1');
      $('.scroll').addClass('opacity0');
      $('.concept2').addClass('scrollin');

    } else {
      $('#top-mini').removeClass('mini mini2');
      $('.head').removeClass('opacity1');
      $('.scroll').removeClass('opacity0');
      $('.concept2').removeClass('scrollin')
    }
  });
  $(window).on('load scroll', function() {
    var scrollPos = $(this).scrollTop();
    if ( scrollPos > 800 ) {
      $('#top-mini').addClass('mini2');
    } else {
      $('#top-mini').removeClass('mini2');
    }
  });

//ロゴを押したらトップにスクロール
  $('.logo4').click(function(){
    $('html, body').animate({
     'scrollTop':0
    },500);
  });

  //変数定義
  var navigationOpenFlag = false;
  var navButtonFlag = true;
  var focusFlag = false;

  //ハンバーガーメニュー
      $(function(){

        $(document).on('click','.el_humburger',function(){
          if(navButtonFlag){
            spNavInOut.switch();
            //一時的にボタンを押せなくする
            setTimeout(function(){
              navButtonFlag = true;
            },200);
            navButtonFlag = false;
          }
        });
        $(document).on('click touchend', function(event) {
          if (!$(event.target).closest('.bl_header,.el_humburger').length && $('body').hasClass('js_humburgerOpen') && focusFlag) {
            focusFlag = false;
            //scrollBlocker(false);
            spNavInOut.switch();
          }
        });
      });

  //ナビ開く処理
  function spNavIn(){
    $('body').removeClass('js_humburgerClose');
    $('body').addClass('js_humburgerOpen');
    setTimeout(function(){
      focusFlag = true;
    },200);
    setTimeout(function(){
      navigationOpenFlag = true;
    },200);
  }

  //ナビ閉じる処理
  function spNavOut(){
    $('body').removeClass('js_humburgerOpen');
    $('body').addClass('js_humburgerClose');
    setTimeout(function(){
      $(".uq_spNavi").removeClass("js_appear");
      focusFlag = false;
    },200);
    navigationOpenFlag = false;
  }

  //ナビ開閉コントロール
  var spNavInOut = {
    switch:function(){
      if($('body.spNavFreez').length){
        return false;
      }
      if($('body').hasClass('js_humburgerOpen')){
       spNavOut();
      } else {
       spNavIn();
      }
    }
  };


  $('header a').click(function(){
    var headerHight = 130;
    var id = $(this).attr('href');
    var position = $(id).offset().top - headerHight;
    $('html,body').animate({
      'scrollTop':position
    },800);
    return false;
  });


});
