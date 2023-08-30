const buttonRight = document.querySelector('.button-right');
// document.querySelector('.button-right') = 指定したhtml要素を取得
const buttonLeft = document.querySelector('.button-left');
const imgContainer = document.querySelector('.img-container');
const imgs = document.querySelectorAll('.img-container img');
// document.querySelectorAll() = 指定したhtml要素全てを取得
let count = 0;

console.log('buttonRight', buttonRight);
console.log('buttonLeft', buttonLeft);
console.log('imgContainer', imgContainer);
console.log('imgs', imgs);
console.log('count', count);

buttonRight.addEventListener('click', function () {
  // 右側の矢印ボタンをクリックした場合
  count++; // 変数countに1を足す
  imgContainer.style.transform = `translateX(${-count * 600}px)`;
  if (count >= imgs.length - 1) {
    // もし、変数countの値が3以上になった場合
    buttonRight.style.display = 'none'; // 右側の矢印ボタンを非表示
  }
  buttonLeft.style.display = 'block'; // 左側の矢印ボタンを表示
  // let windowWidth = window.innerWidth;
  // if (windowWidth <= 640) {
  //   // ウィンドウの横幅が640pxを下回った場合
  //   imgContainer.style.transform = `translateX(${count * 250}px)`; // -250pxずつずらす
  // }
});

buttonLeft.addEventListener('click', function () {
  count--; // 変数countから1を減らす
  imgContainer.style.transform = `translateX(${-count * 600}px)`;
  if (count === 0) {
    // もし、変数countの値が0になった場合
    buttonLeft.style.display = 'none'; // 左側の矢印ボタンを非表示
  }
  buttonRight.style.display = 'block'; // 右側の矢印ボタンを表示
  // let windowWidth = window.innerWidth;
  // if (windowWidth <= 640) {
  //   // ウィンドウの横幅が640pxを下回った場合
  //   imgContainer.style.transform = `translateX(${count * 250}px)`; // -250pxずつずらす
  // }
});

// buttonRight.addEventListener('click', function () {}); = 定型文
// クラス名/ID.style.transform = translateX() = 水平にずらす
// `${式・変数}` = 文字列の中に式や変数を入れることが可能
// imgs.length = 定数imgsに格納されている要素の数 = 4
// count = 0 = transform:translateX(0)
// length = 1から数え始める
// クラス名/ID.style.display = 'none'; = 非表示
// クラス名/ID.style.display = 'block'; = 表示
// window.innerWidth; = ウィンドウの横幅(内部の幅)をピクセル単位で返す
