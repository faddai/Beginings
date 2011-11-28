var Person =  function(opt){

    this.name = opt.name || "Unknown";
    this.age = opt.age || 0;
    this.eyeColor = opt.eyeColor || "Blue";
    
    this.getName: function(){
        return this.name;
    },

    this.getBio: function(){
        return "My name is "+ this.getName() + " and I am a "+ this.age + " year old\nwith "+ this.eyeColor +" eye color.";
    }
 
}

var person = Person({name: "Francis Addai", age: 26, eyeColor: "Wine"});
person.getBio();


