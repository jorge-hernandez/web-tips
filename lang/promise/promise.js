let worker = (time) => {
    return new Promise((resolve, reject) => {
        let result = '--';
        setTimeout( () => {
            result = time + " ms";
            resolve(result);
        }, time);    
    });
};
 

console.log('main');
worker(3000).then((result) => {
    console.log(result);
});
worker(1000).then((result) => {
    console.log(result);
});