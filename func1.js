/*var a="ABCDCBF";
(function count(){
    for(var i=0;i<a.length;i++){
        for(var j=0;j<a.length,c=0;j++)
    if(a.charAt(i) === a.charAt(j+1))
        c++;
      if(c!==0)  alert(a.charAt(i)+ " "+ c);
    }
})();
 */

var a="ABCDCABF";
function count(){
  
    for(var i=0;i<a.length;i++){
        c=1;
        for(var j=i;j<a.length;j++)
    if(a.charAt(i) === a.charAt(j+1))
        c++;
      if(c!==1)  alert(a.charAt(i)+ " "+ c);
    }
};
