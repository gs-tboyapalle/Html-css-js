function test()
{
  var  counter = 0;
  function innerfunc (){ return counter+ =1;}
  return innerfunc(); 
}

var ans = test();
ans;