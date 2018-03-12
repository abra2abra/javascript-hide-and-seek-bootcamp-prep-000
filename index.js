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
    
    /*
    var divs=document.getElementById("grand-node").querySelectorAll("div");
  var result=[];
  for(let i=0;i<divs.length-1;i++) {
    result=divs[i].querySelector("div");
  }
return result;
var s = [];
for(let i=0;i<divs.length-1;i++) {
    result.push(divs[i].querySelector("div"));
    s = result.shift();
  }
return s;
    */
    
    return divs[divs.length -1];
}
