const navClickContainer = document.querySelector('.nav-click-container');
// ハンバーガーメニューの部分
// document.querySelector(".nav-click-container") = 指定したhtml要素を取得できる

const navContentContainer = document.querySelector('.nav-content-container');
// メニュー内容の部分

const navClickBorder1 = document.querySelector(
  '.nav-click-container .nav-click-border-1'
);
// 一番上の白色線

const navClickBorder2 = document.querySelector(
  '.nav-click-container .nav-click-border-2'
);
// 真ん中の白色線

const navClickBorder3 = document.querySelector(
  '.nav-click-container .nav-click-border-3'
);
// 一番下の白色線

console.log('navClickContainer', navClickContainer);
console.log('navContentContainer', navContentContainer);
console.log('navClickBorder1', navClickBorder1);
console.log('navClickBorder1', navClickBorder2);
console.log('navClickBorder1', navClickBorder3);

navClickContainer.addEventListener('click', function () {
  // ハンバーガーメニューをクリックした時
  navContentContainer.classList.toggle('no-show'); // メニュー内容を表示 or 非表示
  navClickBorder2.classList.toggle('no-show'); // 真ん中の白色線を非表示 or 表示
  navClickBorder1.classList.toggle('transform'); // 一番上の白色線を右斜め下にする or 平行に戻す
  navClickBorder3.classList.toggle('transform'); // 一番下の白色線を右斜め上にする or 平行に戻す
});

// 定数/クラス名/ID.addEventListener('click', function () {}); = 定型文
// 定数/クラス名/ID.classList.toggle() = クラスがついていない場合=クラスを付与、クラスがついていない場合=クラスを削除
