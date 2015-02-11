function chess() {
    var t="";
    for(var j=1;j<=8;j++){
        t=""; 
       for(i=1;i<=8;i++){
           if((j%2)==0){
               if((i%2)==0)
                   t+= " ";
				else
                   t+="#"; 
			}
           else{
               if((i%2)!==0)
                   t+= " ";
               else
                   t+="#";   
           }   
       }
        console.log(t);
        }  
    }
    
