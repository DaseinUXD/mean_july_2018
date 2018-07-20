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
    // console.log(hash);
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
//
// var john = [
// ];
//
// // john.length = 20;
// original = function () {
//     console.log('The original hashMap ', john, 'has a set length of: ', john.length);
//     // return john;
// };
// original();

var hashMap = [];
hashMap.length = 20;
//
// hashedKey = "age".hashCode();
// var idx = mod(hashedKey, john.length);
// console.log('this is index from hashedKey',idx);

insert = function (key, value) {
    var hashedKey = key.hashCode();
    var index = mod(hashedKey, hashMap.length);
    var pair = [key, value];
    console.log('For the key: ', '*|', key, '|*', 'this is the hashedKey', hashedKey, ', the index', index, ', and the \'key:value\' pair', pair);
    // console.log('this is the array of hashMap at index', index,':', hashMap[index]);
    if (hashMap[index] === undefined) {
        hashMap[index] = [pair];
        // john[index].push([pair]);
        // console.log(hashMap);
        // console.log('this is the array of hashMap at index', index,':', hashMap[index]);
        return hashMap;
    }
    else {
        hashMap[index].push(pair);
        // console.log('this is the array of hashMap at index', index,':', hashMap[index]);
        return hashMap;
    }

};

look_up = function (hashMap, key) {

    var hashedKey = key.hashCode();
    var index = mod(hashedKey, hashMap.length);
    console.log('this is the the array at the ***NEW*** hashMap\'s index', index, ':', hashMap[index]);

    if (hashMap.length === undefined) {
        return null;
    }
    else {



        // v0 = hashMap[0].valueOf();
        // v00 = hashMap[0][0].valueOf();
        // v000 = hashMap[0][0][0].valueOf();
        // v001 = hashMap[0][0][1].valueOf();
        // v0000 = hashMap[0][0][0][0].valueOf();
        // v0001 = hashMap[0][0][0][1].valueOf();
        // indexLength = hashMap[index].valueOf();
        console.log('index - : ', index);


        // console.log('hashMap[index].length: ', indexLength);
        // console.log('hashMap[0] value: ', v0);
        // console.log('hashMap[0][0] value', v00);
        // console.log('hashMap[0][0][0] value', v000);
        // console.log('hashMap[0][0][1] value', v001);
        // console.log('hashMap[0][0][0][0] value', v0000);
        // console.log('hashMap[0][0][0][1] value', v0001);
        var indexArray = hashMap[index];
        console.log(indexArray);



        for (var i = 0; i < indexArray.length; i++) {
            var k = indexArray[i][0].valueOf();
            var v = indexArray[i][1].valueOf();

            console.log('the key at index ', index, 'is:','***', k,'***', 'with a value of ','***', v,'***');

        }

        if( k !== l_key) {
            return null;
        }


    }
    return v;
// console.log('hashMap[i] array: ',[i] , 'value is', hashMap[i][i][0].valueOf(),'i is ', i, 'length is ', length);
// for (j = 0; j < hashMap[index][i].length; i++){
//     var look_value = hashMap[index][i][j].includes(key);
// }
// // var pair = [key, value];
// console.log('this is the look_value from loop:', look_value);

// return val;
};

/*
[["age", 9], ["height", 4], ["weight", 75]],
[["school", "jfk"], ["grade", "second"]],
[["sport", "football"]]
 */
// let lf = look_up(hashMap, "grade");
// console.log(lf);
insert("age", 9);
insert("height", 4);
insert("weight", 75);
insert("school", "jfk");
insert("grade", "second");
insert("sport", "football");
insert("teacher", "smith");
insert("mother", "wells");

console.log('This is the new hashMap:', hashMap);
const l_key = 'country';
let lu = look_up(hashMap, l_key);
console.log('the value for', l_key,' is:',lu);
