var arr=[1,2,3,4,5,6,7,8,9,10];
var a1=[],a2=[];
for(var i=0;i<arr.length;i++){
    if((arr[i]%2)==0){
        a1.push(arr[i]);
    }
    else{
        a2.push(arr[i]);
    }
 }
alert(a1);
alert(a2);