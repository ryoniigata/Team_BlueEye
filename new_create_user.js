// フォームのリセット処理
function reset_form(){
  document.getElementById('input_id').value = '';
  document.getElementById('input_pass').value = '';
  document.getElementById('input_again').value = '';
}

// ユーザ登録完了の処理
function submit_form(){
  var id = document.getElementById('input_id');
  var pass = document.getElementById('input_pass');
  var again = document.getElementById('input_again');
  var errMsg = document.getElementById('errMsg');

  //未入力欄の枠初期化
  id.style.border = '';
  pass.style.border = '';
  again.style.border = '';

  // 未入力チェック
  if(!id.value){
    errMsg.style.visibility = 'visible';
    id.style.border = '2px solid #ff0000';
  }else if (!pass.value) {
    errMsg.style.visibility = 'visible';
    pass.style.border = '2px solid #ff0000';
  }else if (!again.value) {
    errMsg.style.visibility = 'visible';
    again.style.border = '2px solid #ff0000';
  }else{
    // パスワード確認の一致判定
    if(pass.value === again.value){
      var modal = document.getElementById('modal_wrapper');
      modal.style.display = 'block';
    }else {
      errMsg.textContent = 'パスワード確認が一致しません'
      errMsg.style.visibility = 'visible';
      again.style.border = '2px solid #ff0000';
    }
  }

}

var reset = document.getElementById('reset');
var submit = document.getElementById('submit');

reset.addEventListener('click',reset_form);
submit.addEventListener('click',submit_form);
