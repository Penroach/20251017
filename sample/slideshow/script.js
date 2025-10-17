$(function() {
  // スクロールの方向（-1の時には左、1の時には右）
  let dir = -1;

  // スクロールのインターバル（何秒ごとにスクロールさせるか）
  let interval = 3000;  // 3000ミリ秒 = 3秒

  // スクロールのアニメーションの時間
  let duration = 700;  // 700ミリ秒 = 0.7秒

  // タイマー用の変数
  let timer;

  // liの順番を変更（3番目を1番目にする）
  $("#slide ul").prepend($("#slide li:last-child"));

  // スライドの位置を設定（画像1枚分左にずらす）
  $("#slide ul").css("left", -1000);

  timer = setInterval(slideTimer, interval);

  function slideTimer() {
    // スライドを左に移動
    if (dir === -1) {

        $("#slide ul").animate({ "left": "-=1000px" }, duration,
          function() {
            // liの順番を変更（1番目を3番目にする）
            $(this).append($("#slide li:first-child"));
    
            // liの位置を変更
            $(this).css("left", -1000);
        });
    }
    else {
        $("#slide ul").animate({"left": "+=1000px"}, duration, function() {
            $(this).prepend($("#slide li:last-child"));
            $(this).css("left", -1000);
        }
        );
    }
  }
  $("#prevBtn").click(function() {
    dir =1;
    clearInterval(timer);
    timer = setInterval(slideTimer, interval);

    slideTimer();
  });
  $("#nextBtn").click(function() {
    dir = -1;
    clearInterval(timer);
    timer = setInterval(slideTimer, interval);

    slideTimer();
  });
  // 関数を実行
  slideTimer();
});