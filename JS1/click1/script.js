const button = document.querySelector('.button');
//緑色の投稿ボタン(.botton)のhtml要素を、定数buttonに格納
//document.querySelector() = クラスなどのhtml要素を取得
console.log(button);

const popupContainer = document.querySelector('.popup-container');
// ポップアップ画面(.popup-container)のhtml要素を、定数popupContainerに格納
// ポップアップ画面(.popup-container) = 非表示 = display:none;が設定
// console.log(popupContainer);

button.addEventListener('click', function () {
  popupContainer.style.display = 'block';
});

// 定数/クラス/ID.addEventListener("click", function(){}); = 定型分
// 定数/クラス/ID.style.display = "block"; = 定型分
// クラス.style.color = "red";
// クラス.style.backgroundColor = "red"

const popupCloseButton = document.querySelector('.popup-close-button');
// ×ボタン(.popup-close-button)のhtml要素を、定数popupCloseButtonに格納
// console.log(popupCloseButton);

popupCloseButton.addEventListener('click', function () {
  popupContainer.style.display = 'none';
});

popupContainer.addEventListener('click', function () {
  popupContainer.style.display = 'none';
});

const popupBox = document.querySelector('.popup-box');
console.log(popupBox);

popupBox.addEventListener('click', function (e) {
  e.stopPropagation();
});
// e = eventの略。イベントオブジェクト = 定数popupBoxのクリックイベント
// stopPropagation = 親要素は阻止するが、子要素はしない
