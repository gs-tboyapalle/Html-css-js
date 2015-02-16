(function(){
    var Vehicle=Backbone.Model.extend({
        initialize:function(){
            console.log("Hello i am from initialize!!")
        }
        },{
        summary: function(){
            return "Vehicles are for travelling";
        }
    });
   // var v= new Vehicle();
    var B=Vehicle.extend({});
    var Bobject=new B();
    console.log(Bobject instanceof Vehicle);    
    console.log(Bobject instanceof B);
    console.log(Bobject instanceof Backbone.Model);
})();