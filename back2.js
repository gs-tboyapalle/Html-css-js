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
        console.log(Vehicle.summary());
    var a= new Vehicle();
})();