const scrollContainer = document.querySelector('.scroll-container'); // メルマガ登録ボタンの部分
//　document.querySelector('.scroll-container')　= html要素を取得
console.log('scrollContainer', scrollContainer);

window.addEventListener('scroll', function () {
  // ブラウザがスクロールされた場合
  if (window.scrollY > 200) {
    // 縦のスクロールが201px以上の場合
    scrollContainer.classList.remove('no-show'); // メルマガ登録ボタンを表示
  } else {
    // 縦のスクロール量が200px以下の場合
    scrollContainer.classList.add('no-show'); // メルマガ登録ボタンを非表示にする
  }
});
// window = ブラウザの操作に使用
// window.addEventListner('scroll', function(){}); = 定型文
// window.scrollY = 縦方向にスクロールしているピクセル数を表す
// 定数/クラス名/ID.classList.remove() = 指定したクラスを削除
// 定数/クラス名/ID.classList.add() = 指定したクラスを付与
