$("#b0,#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9,#dot,#plus,#minus,#mul,#divide,#mod").click(function(){
    $('#cal').append($(this).text());
});
$("#C").click(function(){
    $('#cal').empty();
});
$("#inverse").click(function(){
    var a= $("#cal").text();
      $('#cal').empty();
    $('#cal').append("1/(");
    $('#cal').append(a);
    $('#cal').append(")");
});
$("#eq").click(function(){
    var result=$("#cal").text();
    $("#cal").empty();
    $("#cal").append(eval(result));  
});
$("#backspace").click(function(){
    var str=$('#cal').text();
    $('#cal').text(str.substr(0,str.length-1));
});
$("#root").click(function(){
    var str=$('#cal').text();
    $('#cal').empty();
    for(var i=str.length;i>0;i--){
         if(str[i]=='+' || str[i]=='-' || str[i]=='*' || str[i]=='/' || str[i]=='%')
        {  
            $('#cal').append(str.substr(0,i));
            if(str[i-1]=='+' || str[i-1]=='-' || str[i-1]=='*' || str[i-1]=='/' || str[i-1]=='%')
                if(str[i]=='-')
                {
                    $('#cal').append("Invalid input");
                    break;
                }
            $('#cal').append(str[i]);
            var s=str.substr(i+1,str.length)
           $('#cal').append(Math.sqrt(s));
            break;
        }
        else if(i==1){
            if(str>0)
           $('#cal').append(Math.sqrt(str));
            else
             $('#cal').append("Invalid input");
        }
    }
});
$("#plusminus").click(function(){
    var str=$('#cal').text();
    $('#cal').empty();
    for(var i=str.length;i>0;i--){
        if(str[i]=='+' || str[i]=='-' || str[i]=='*' || str[i]=='/' || str[i]=='%')
        {
           $('#cal').append(str.substr(0,i+1));
            var s=str.substr(i+1,str.length)
            if(s>0)
           $('#cal').append("-"+s);
            else
             $('#cal').append(s);
            break;
        }
        else if(i==1){
            if(str>0)
           $('#cal').append("-"+str);
            else
             $('#cal').append(str);
        }
    } 
});
$("#CE").click(function(){
   var str=$('#cal').text();
    $('#cal').empty();
    for(var i=str.length;i>0;i--){
        if(str[i]=='+' || str[i]=='-' || str[i]=='*' || str[i]=='/' || str[i]=='%')
        {
           $('#cal').append(str.substr(0,i));
            break;
        }
        else if(i==1){
            $('#cal').empty();
        }
    } 
});