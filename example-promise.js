// function getTempCallback(location, callback) {     callback(undefined, 21);
//   callback('City not found'); } getTempCallback('Barcelona', function (err,
// temp) {     if (err) {         console.log('error', err);     } else {
//  console.log('sucess', temp)     } }); function getTempPromise(location) {
//  return new Promise(function (resolve, reject) {         setTimeout(function
// () {             resolve(25);             reject('City not found');
// }, 1000)     }); } getTempPromise('Barcelona')     .then(function (temp) {
//      console.log('promise success', temp);     }, function (err) {
// console.log('promise err', err);     })
if (typeof someNumber === 'number') 
;

function addPromise(a, b) {
    return new Promise(function (resolve, reject) {

        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a + b)
        } else {
            reject('At least one of the argument is not a number');
        }
    });

}

addPromise(4, 5)
    .then(function (temp) {
        console.log('promise success', temp);
    }, function (err) {
        console.log('promise err', err);
    });


addPromise(4, 'string')
.then(function (temp) {
    console.log('promise success', temp);
}, function (err) {
    console.log('promise err', err);
});

    