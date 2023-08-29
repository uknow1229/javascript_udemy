function orderList() {
  let select = [];
  let order = document.getElementsByClassName('order');
  for (let i = 0; i < order.length; i++) {
    let selectHtml = '<select id=select' + i + '>';
    for (let j = 0; j < 10; j++) {
      selectHtml += '<option>' + j + '</option>';
    }
    order[i].innerHTML = selectHtml + '</select>';
    select[i] = document.getElementById('select' + i);
    select[i].addEventListener('change', calc);
  }
}
function calc() {
  let total = 0;
  let elements; //form内の要素
  let orderNumber; //要素の値(注文数)
  let priceElement; //金額を表示する要素
  let price; //一覧表の値段(円)
  let order = document.getElementsByClassName('order');
  let shopTable = document.getElementById('shopTable');
  let totalElement = document.getElementById('sum');

  for (let i = 0; i < order.length; i++) {
    elements = document.forms[0].elements[i];
    // console.log('elements', elements);
    orderNumber = elements.value;
    // console.log('orderNumber', orderNumber);
    price = shopTable.rows[i + 1].cells[2].innerText;
    priceElement = document.getElementById('price' + i);
    if (orderNumber > 0) {
      // console.log('priceElement', priceElement);
      priceElement.innerHTML = orderNumber * price;
    } else {
      priceElement.innerHTML = '';
    }
    total += orderNumber * price;
    totalElement.innerHTML = '合計支払金額：' + total + '円';
  }
}
