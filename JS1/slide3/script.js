const slideshowContent = document.querySelectorAll('.slideshow-content');
// document.querySwlectorAll() = 指定したすべてのhtml要素を取得可能
console.log('slideshowContent', slideshowContent);

let count = 1;

setInterval(function () {
  if (count >= slideshowContent.length) {
    // 変数countの値が3以上になった場合(3>=3)
    count = 0; // 変数countの値を0にする(0-2)
  }
  slideshowContent.forEach(function (value, index) {
    // 定数slideshowContentの要素を1つずつ取り出す
    console.log('value', value); // 格納されている値
    console.log('index', index); // 番号
    value.classList.remove('active');
    // slideshowContent[0] slideshowContent[1] slideshowContent[2]
  });
  // 6秒ごとに処理を繰り返す
  slideshowContent[count].classList.add('active');
  // 一番最初に6秒を経過した時 = slideshowContent[1]
  count++; // 変数countに1を加算
}, 6000);

// setInterval(function () {}, 時間間隔); = 指定した一定の間隔で処理を繰り返す
// クラス名/ID/変数.classList.add(クラスを指定) = クラスを付与
// ++ = インクリメント演算子 =  1を加算
// .length = 要素の数 = 1から数え始める
// forEach(function(){}); = 配列を取り出す
// クラス名/ID/変数.classList.remove(クラスを指定) = クラスを削除
