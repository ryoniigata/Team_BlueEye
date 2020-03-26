// フォームのリセット処理
function reset_form(){
  document.getElementById('input_id').value = '';
  document.getElementById('input_pass').value = '';
  document.getElementById('input_mail').value = '';
}

// ユーザ登録完了の処理
function submit_form(){
  var id = document.getElementById('input_id');
  var pass = document.getElementById('input_pass');
  var mail = document.getElementById('input_mail');
  var errMsg = document.getElementById('errMsg');

  //未入力欄の枠初期化
  id.style.border = '';
  pass.style.border = '';
  mail.style.border = '';

  if(!id.value){
    errMsg.style.visibility = 'visible';
    id.style.border = '2px solid #ff0000';
  }else if (!pass.value) {
    errMsg.style.visibility = 'visible';
    pass.style.border = '2px solid #ff0000';
  }else if (!mail.value) {
    errMsg.style.visibility = 'visible';
    mail.style.border = '2px solid #ff0000';
  }else{
    var modal = document.getElementById('modal_wrapper');
    modal.style.display = 'block';
  }

}

var reset = document.getElementById('reset');
var submit = document.getElementById('submit');

reset.addEventListener('click',reset_form);
submit.addEventListener('click',submit_form);
