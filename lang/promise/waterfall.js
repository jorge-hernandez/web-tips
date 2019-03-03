var waterfall = require('async-waterfall');
waterfall([
    (callback) => {
        let result = '';
        setTimeout(() => {
            result = '1';
            callback(null,result);
        }, 3000);
        
    }
    ,
    (result, callback) => {
        setTimeout(() => {
            result = result + ', 2';
            callback(null, result);
        }, 2000);
        
    }
    ,
    (result, callback) => {
        setTimeout(() => {
            result = result + ', 3';
            callback(null, result);
        }, 1000);
    }
], (err, result) => {
    console.log(result);
});