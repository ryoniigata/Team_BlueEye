// フォームの未入力チェック
function input_check(){

  var id = document.getElementById('input_id').value;
  var pass = document.getElementById('input_pass').value;
  var errMsg = document.getElementById('errMsg');

  if(!id && !pass){
    errMsg.style.visibility = 'visible';
  }else if (!id) {
    errMsg.textContent = 'IDを入力してください';
    errMsg.style.visibility = 'visible';
  }else if (!pass) {
    errMsg.textContent = 'PWを入力してください';
    errMsg.style.visibility = 'visible';
  }
}

var submit = document.getElementById('submit');

submit.addEventListener('click',input_check);
