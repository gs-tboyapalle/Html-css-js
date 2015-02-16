(function(){
        var Vehicle=Backbone.Model.extend({
                prop:"1"
        });
        var a=new Vehicle();
        var b=new Vehicle();
        a.prop="Today";
        console.log(a.prop);
        console.log(b.prop);
})();