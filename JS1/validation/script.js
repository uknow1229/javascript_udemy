$(function () {
  const button = document.querySelector('.button');
  // document.querySelector('.button') = 指定したhtml要素を取得
  console.log('button', button);

  const formName = document.querySelector('.name');
  const nameErrorText = document.querySelector('.name-error-text');
  const formFurigana = document.querySelector('.furigana');
  const furiganaErrorText = document.querySelector('.furigana-error-text');
  const formEmail = document.querySelector('.email');
  const emailErrorText = document.querySelector('.email-error-text');
  const email_pattern =
    /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;
  // 正規表現 = 一つの表現で、いくつかの文字列を表す
  const formTel = document.querySelector('.tel');
  const telErrorText = document.querySelector('.tel-error-text');
  const tel_pattern = /^0\d(9,10)$/;
  const formTextarea = document.querySelector('.textarea');
  const textareaErrorText = document.querySelector('.textarea-error-text');

  let nameError;
  let furiganaError;
  let emailError;
  let telError;
  let textareaError;

  button.addEventListener('click', function () {
    // 送信ボタンをクリックした時

    if (formName.value.length === 0) {
      // お名前の入力欄に入力された要素が0の場合(何も入力されていない場合)
      // formName.value = 実際に入力された値
      // formName.value.length = 実際に入力された値の要素数
      nameErrorText.innerText = '名前を入力してください';
      // クラス名/ID/変数.innerText = '表示したい文字';
      nameError = '名前未入力';
    } else if (formName.value.length >= 21) {
      // お名前の入力欄に入力された要素が21文字以上の場合
      nameErrorText.innerText = '20文字以下で入力してください';
      nameError = '名前入力オーバー';
    } else {
      // お名前の入力欄に入力された要素が1文字以上20文字以下の場合(正常な場合)
      nameErrorText.innerText = ''; // エラーメッセージを非表示
      nameError = '';
    }
    // console.log('nameError', nameError);
    // if(nameError === ''){
    //   データベースに繋げる処理を行う
    // }

    if (formFurigana.value.length === 0) {
      furiganaErrorText.innerText = 'フリガナを入力してください';
      furiganaError = 'フリガナ未入力';
    } else if (formFurigana.value.length >= 21) {
      furiganaErrorText.innerText = '20文字以下で入力してください';
      furiganaError = 'フリガナ入力オーバー';
    } else {
      furiganaErrorText.innerText = '';
      furiganaError = '';
    }
    // console.log('furiganaError', furiganaError);

    // if (nameError === '' && furiganaError === '') {
    //   データベースに繋げる処理を行う;
    // }

    if (formEmail.value.length === 0) {
      emailErrorText.innerText = 'Emailを入力してください';
      emailError = 'Email未入力';
    } else if (formFurigana.value.length >= 101) {
      emailErrorText.innerText = '100文字以下で入力してください';
      emailError = 'Email入力オーバー';
    } else if (!email_pattern.test(formEmail.value)) {
      // 入力されたEmailと正規表現が合致しない場合
      // 正規表現.test(正規表現に合致するか判断したい要素) = 正規表現に合致するか判断
      // gen@gmail.com
      // gen1028@gmail.com
      emailErrorText.innerText = 'Emailを正しく入力してください';
      emailError = 'Email入力ミス';
    } else {
      emailErrorText.innerText = '';
      emailError = '';
    }
    console.log('emailError', emailError);

    // if (nameError === '' && furiganaError === '' && emailError === '') {
    //   データベースに繋げる処理を行う;
    // }

    if (formTel.value.length === 0) {
      telErrorText.innerText = '電話番号を入力してください';
      telError = '電話番号未入力';
    } else if (formTel.value.length >= 12) {
      telErrorText.innerText = '11文字以下で入力してください';
      telError = '電話番号入力オーバー';
    } else if (!tel_pattern.test(formTel.value)) {
      // 入力された電話番号と正規表現が合致しない場合
      // 09999999999
      telErrorText.innerText = '電話番号を正しく入力してください';
      telError = '電話番号入力ミス';
    } else {
      telErrorText.innerText = '';
      telError = '';
    }
    console.log('telError', telError);

    // if (nameError === '' && furiganaError === '' && emailError === '' && telError === '') {
    //   データベースに繋げる処理を行う;
    // }

    if (formTextarea.value.length === 0) {
      // お問い合わせ内容の入力欄に入力された要素が0の場合(何も入力されていない場合)
      textareaErrorText.innerText = 'お問い合わせ内容を入力してください';
      textareaError = 'お問い合わせ内容未入力';
    } else if (formTextarea.value.length >= 1001) {
      // お問い合わせ内容の入力欄に入力された文字数が1001文字以上の場合
      textareaErrorText.innerText = '1000文字以下で入力してください';
      textareaError = 'お問い合わせ内容入力オーバー';
    } else {
      // 入力された文字数が1文字以上1000文字以下の場合
      textareaErrorText.innerText = '';
      textareaError = '';
    }
    console.log(textareaError);

    // if (nameError === '' && furiganaError === '' && emailError === '' && telError === '' && textareaError === '') {
    //   データベースに繋げる処理を行う;
    // }
  });
  // クラス名/ID/変数.addEventListener('click', function () {}); = クリックイベントの定型文
});
