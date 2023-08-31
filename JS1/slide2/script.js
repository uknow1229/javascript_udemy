const imgs = document.querySelectorAll('.slideshow-container img');
const circleSign = document.querySelectorAll('.circle-sign');
// document.querySelectorAll() = html要素を複数取得することが可能
let count = 1;

console.log('imgs', imgs);
console.log('circleSign', circleSign);
console.log('count1', count);

setInterval(function () {
  // 6秒ごとに処理を繰り返す
  // console.log('count2', count);

  if (count > 2) {
    // もし、変数countの値が3以上になった場合
    // console.log('count3', count);
    count = 0; // 変数countの値を0にする(0-2)
  }
  imgs.forEach(function (value, index) {
    //定数imgsに格納された要素を1つずつ取り出す
    console.log('value', value); // html要素
    console.log('index', index); // 0から始まる格納された要素の番号(0-2)
    imgs[index].classList.remove('active'); // 3つのimgタグから.activeを削除
    // imgs[index] = imgs[0] imgs[1] imgs[2]
    circleSign[index].classList.remove('active');
    // circleSign[index] = circleSign[0] circleSign[1] circleSign[2]
  });
  imgs[count].classList.add('active'); // imgタグに順番に.avtiveを付与
  circleSign[count].classList.add('active'); // .circle-signに順番に.activeを付与
  count++; // 変数countに1を加算
}, 6000);

// setInterval(function () {}, 時間間隔); = 一定間隔ごとに特定の処理を繰り返す
// クラス名/ID/変数.classList.add(クラスを指定) = クラスを付与
// ++ = インクリメント演算子 = 1を加算
// forEach(function({})); = 配列を1つずつ取り出す
// クラス名/ID/変数.classList.remove(クラスを指定) = クラスを削除
