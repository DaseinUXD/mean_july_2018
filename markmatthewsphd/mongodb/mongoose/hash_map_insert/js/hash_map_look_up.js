// var hashMap = [];
// hashMap.length = 30;


String.prototype.hashCode = function () {
    var hash = 0;
    if (this.length === 0) {
        return hash;
    }
    for (i = 0; i < this.length; i++) {
        var char = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash &= hash;
    }
    console.log(hash);
    return hash;


};

// var hashedKey = "role".hashCode();

// console.log(hashedKey);

function mod(input, div) {
    return (input % div + div) % div;
}

// var indx = mod(hashedKey, hashMap.length);

// console.log(indx);



var john = [
    [["age", 9], ["height", 4], ["weight", 75]],
    [["school", "jfk"], ["grade", "second"]],
    [["sport", "football"]]
];

john.length = 20;
console.log('the length is ',john);
//
// hashedKey = "age".hashCode();
// var idx = mod(hashedKey, john.length);
// console.log('this is index from hashedKey',idx);

insert = function (key, value) {
    var hashedKey = key.hashCode();
    var index = mod(hashedKey, john.length);
    var pair = [key, value];
    console.log('this is the hashedKey, index, and pair', hashedKey, index, pair);
    console.log(john[index]);
    if (john[index] === undefined) {
        john[index] = [pair];
        // john[index].push([pair]);
        console.log(john);
        return john;
    }
    else {
        john[index].push([pair]);
        return john;
    }

};

insert("teacher", "smith");
insert("semester","fall");
console.log(john);
