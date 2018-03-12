function getFirstSelector(selector){
  var select = document.querySelector(selector);
  return select;
}

function nestedTarget(){
  var target = document.getElementById('nested').getElementsByClassName('target');
  
  return target[0];
}

function increaseRankBy(n){
  var lis = document.querySelectorAll('.ranked-list li');
  for(var i = 0; i< lis.length; i++){
    lis[i].innerHTML = parseInt(lis[i].textContent) + n;
  }
}

function deepestChild(){
        var divs = document.getElementById('grand-node').querySelectorAll('div');
    
    return divs[3];

 
    

}
