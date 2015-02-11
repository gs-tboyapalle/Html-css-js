var n=prompt("Enter a number?"," ");
(function (){
    var fac=1;
    for(var i=1;i<=n;i++)
      fac=fac*i;
    alert(fac);
 })();


function fact(n){
    if(n>0)
        return n*fact(n-1);
    else
        return 1;
};
alert(fact(n));