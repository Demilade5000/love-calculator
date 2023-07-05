function calc(){
    var one = document.getElementById('one').value;
    var two = document.getElementById('two').value;
    var onetext = document.createTextNode(one);
    var twotext = document.createTextNode(two);
    var dis = document.getElementById('display');
    var cal = Math.round(Math.random()*100);
    // var percent = document.createTextNode('%')
    // cal.appendChild(percent)
    var join = cal + '%';
    var caltext = document.createTextNode(join)
    dis.appendChild(caltext)
    empty = '';
    document.getElementById('one').value = empty;
    document.getElementById('two').value = empty;
    // document.getElementById('display') === ''

    if (document.getElementById('one')==='' || document.getElementById('two')===''){
        var noinput = document.createTextNode('pls enter your names')
        dis.appendChild(noinput)
    }

    if(cal <= 49){
        var fail =  document.createTextNode('you are incompatible')
        dis.appendChild(fail)
      }
      if(cal >= 50 && cal<=60 ){
          var weakpass = document.createTextNode('Your love is weak, but you may work!');
          dis.appendChild(weakpass);
      }
      if(cal >60 && cal<=70 ) {
          var avgpass = document.createTextNode('Your love is fairly strong, get to know each other better !')
          dis.appendChild(avgpass)
      }
      if(cal >70 && cal <=85){
          var strongpass = document.createTextNode('You are very much in love!')
          dis.appendChild(strongpass)
      }
      if(cal >85 && cal <=99){
      var strongestpass = document.createTextNode('You are soulmates!')
      dis.appendChild(strongestpass)
      }
  
}



//     }

    




function wipe(){
    document.querySelector("#display").innerHTML = ''
}