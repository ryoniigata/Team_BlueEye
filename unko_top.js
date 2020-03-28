
var drag_object = document.getElementById('drag_area');
var drop_area   = document.getElementById('drop_area');
var modal = document.getElementById('unko_modal');
var monster = document.getElementById('drop_object');

function drag_start(event){
  event.dataTransfer.setData('text/html',event.target.outerHTML);
}

function drag_over(event){
  event.preventDefault();
}

function drop_end(event){
  event.preventDefault();
  // drop_area.innerHTML = event.dataTransfer.getData('text/html');
  modal.className = 'show';

}

function close_modal(){
  modal.className = 'hide';

}

// function monster_fulful(){
//   monster.className = 'fulful';
// }
//
// function monster_remove(){
//   monster.classNameList.remove('fulful');
// }

drag_object.addEventListener('dragstart',drag_start);
drop_area.addEventListener('dragover',drag_over);
drop_area.addEventListener('drop',drop_end);
modal.addEventListener('click',close_modal);
// monster.addEventListener('mouseover',monster_fulful);
