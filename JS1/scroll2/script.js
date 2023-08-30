const contentContainers = document.querySelectorAll('.content-container');
//document.querySelectorAll('.content-container') = 指定したhtml要素をすべて返す
console.log('contentContainers', contentContainers);

window.addEventListener('scroll', function () {
  // ブラウザがスクロールされた場合
  contentContainers.forEach(function (value) {
    // .content-containerのhtml要素を1つずつ取り出す
    if (
      window.scrollY >
      value.getBoundingClientRect().top +
        250 +
        window.scrollY -
        window.innerHeight
    ) {
      // 画面の高さより、いずれかの.content-containerの相対位置が下回った場合
      value.classList.add('active');
    } else {
      // 画面の高さより、いずれかのcontent-containerの相対位置が上回った場合
      value.classList.remove('active');
    }
  });
});

// window = ブラウザの操作に使用
// window.addEventListener('scroll', function () {}) = 定型文
// .forEach(function(){}); = 配列風オブジェクト(NodeList)の要素を、1つずつ取り出す
// value = forEachによって取り出された、 3つある.content-containerのいずれかのhtml要素
// value = 3つある.content-containerにいつでもアクセスが可能な状態
// window.scrollY = 縦方向にスクロールしているピクセル数を表す
// value.getBoundingClientRect().top = 現在の画面上端から要素の上端の位置をピクセル数で取得。相対位置のため、スクロール量の合算が必要
// window.innerHeight = ページが表示されるブラウザの高さ(画面の高さ)
// value.classList.add('active') = 指定したクラスを付与
// value.classList.remove('active') = 指定したクラスを削除
