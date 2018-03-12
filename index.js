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
        var divsS = document.getElementById('grand-node').querySelectorAll('div');
        var empty = [];

 
    for( i=0; i< divsS.length; i++ ) {
        empty.push(divsS[i]);
    }

  }

divsS = empty.shift();


  }

  return null; 
}
