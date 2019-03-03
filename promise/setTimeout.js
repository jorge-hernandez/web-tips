let worker = (time) => {
    let result = '--';
    setTimeout( () => {
        result = time + " ms";
    }, time);
    return result;
};

console.log('main');
console.log(worker(3000));