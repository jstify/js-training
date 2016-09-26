/* Literal Object declaration */
var box = {
    '#N' : 1,
    shape : 'Rectangle',
    material : "Silver",
    size : 'Small',
    display : function(){
        console.log("I am a " + box.size + " " + box.shape + " shaped " + box.material + " box.");
    },
};

/* Access properties & methods */

/*
    box.shape //??
    box['size'] //??
    var key = 'size';
    box[key] //??
    box.key //??
    var property = 'reUsable';
    box.property = true; //??
    box.reUsable = true; //??
    box.property //??
    box[property] //??
    var prop = 'value';
    box[prop] = 10000;
    box.prop //??
    box['prop'] //??
    box[prop] //??
*/


/* Get Propertis of an Object by looping */
function printProps(item){
    console.log('Box properties:')
    for(var key in item){
        console.log(key + ':' + item[key]);
    }
}


/* Own Properties */
//box.hasOwnProperty('shape')

/* Inheritd Properties */
//box.hasOwnProperty('toString')



/* Freezes an object: other code can't delete or change any properties.*/
//Object.freeze(box)


/* Prevents other code from deleting properties of an object. */
//Object.seal(box)

/* Returns an array containing the names of all of the given object's own enumerable properties. */
//Object.keys(box)


 /* Default attributes of every object property */
//configurable - DontDelete - Defaults to false.
//enumerable - DontEnum -  Defaults to false. - the property will be enumerated in for...in loops
//value - Value of a property - Defaults to undefined.
//writable - Read-only - Defaults to false.

var box2 = {
    '#N' : 1,
    display : function(){
        console.log("I am a " + box.size + " " + box.shape + " shaped " + box.material + " box.");
    }
};

function changeDefaultAttr(){
    //Object.defineProperty() || Object.defineProperties()
    
    Object.defineProperties(box2, {
        "shape": {
            value: 'Circle',
            configurable: false,
            enumerable: true,
            writable: true
        },
        "material": {
            value: "Copper",
            enumerable: false,
            configurable: true,
            writable: true
        },
        "size": {
            value: "Medium",
            configurable: true,
            enumerable: true,
            writable: false
        }
    });
}



// Object creating using new keyword

//var obj = new Object();
//var obj = new Object(undefined);
//var obj = new Object(null);

//var obj = new Object(true); // equivalent to o = new Boolean(true);