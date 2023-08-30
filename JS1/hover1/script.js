const contentAccontImg = document.querySelector('.content-account img');
// document.querySelector(クラス名・ID・タグ名)
console.log('contentAccontImg', contentAccontImg);

const hoverShowContainer = document.querySelector('.hover-show-container');
console.log('hoverShowContainer', hoverShowContainer);

contentAccontImg.addEventListener('mouseover', function () {
  hoverShowContainer.style.display = 'block';
  // 定数/クラス名/ID.style.display = 'block'; = display:block;に変更
});
// imgタグ(画像アイコン)をホバーした時
// 定数/クラス名/ID.addEventListener('mouseover', function () {}); = ホバーした時の定型文

contentAccontImg.addEventListener('mouseleave', function () {
  hoverShowContainer.style.display = 'none';
  // 定数/クラス名/ID.style.display = 'none'; = display:none;に変更
});
// imgタグ(画像アイコン)のホバーを外した時
// 定数/クラス名/ID.addEventListener('mouseleave', function(){}); = ホバーを外した時の定型文

// hoverShowContainer.addEventListener('mouseover', function () {
//   hoverShowContainer.style.display = 'block'; // 表示状態を維持
// });
// 画像アイコンをホバーした時に表示される、定数hoverShowContainer('.hover-show-container')をホバーした時

hoverShowContainer.addEventListener('mouseover', function (e) {
  e.target.style.display = 'block';
});

// e = eventの略 = 定数hoverShowContainerを指す

// hoverShowContainer.addEventListener('mouseleave', function () {
//   hoverShowContainer.style.display = 'nonoe'; // 非表示に変更
// });
// 画像アイコンをホバーした時に表示される、定数hoverShowContainer('.hover-show-container')をホバーを外した時

hoverShowContainer.addEventListener('mouseleave', function (e) {
  e.target.style.display = 'none';
});
