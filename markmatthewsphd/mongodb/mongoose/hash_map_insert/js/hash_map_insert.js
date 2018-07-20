let hashMap = [];
const john = [
    [["age", 9], ["height", 4], ["weight", 75]],
    [["school", "jfk"], ["grade", "second"]],
    [["sport", "football"]]
];
hashMap = john;
hashMap.length = 20;
console.log('Global array hashMap: ',john, 'the length is ', john.length);

$(document).ready(function () {
    // return john;


    console.log(hashMap);

    String.prototype.hashCode = function () {
        let hash = 0;
        if (this.length === 0) {
            return hash;
        }
        for (i = 0; i < this.length; i++) {
            let char = this.charCodeAt(i);
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


//
// hashedKey = "age".hashCode();
// var idx = mod(hashedKey, hashMap.length);
// console.log('this is index from hashedKey',idx);

    insert = function (key, value) {
        let hashedKey = key.hashCode();
        let index = mod(hashedKey, hashMap.length);
        let pair = [key, value];
        console.log('this is the hashedKey, index, and pair', hashedKey, index, pair);
        console.log(hashMap[index]);
        if (hashMap[index] === undefined) {
            hashMap[index] = [pair];
            // hashMap[index].push([pair]);
            console.log(hashMap);
            return hashMap;
        }
        else {
            hashMap[index].push(pair);
            return hashMap;
        }


    };
//
    console.log('before inserts', hashMap);
    insert("teacher", "smith");
    insert("semester","fall");
    console.log('after inserts', hashMap);
    console.log('the original john',john);
});
console.log('the original global john',john);
