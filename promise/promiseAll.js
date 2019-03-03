let prom1 = new Promise((resolve, reject)=>{
    let result = '';
    setTimeout(() => {
        result = 'prom1';
        resolve(result);
    }, 3000);
});

let prom2 = new Promise((resolve, reject)=>{
    let result = '';
    setTimeout(() => {
        result = 'prom2';
        resolve(result);
    }, 2000);
});

let prom3 = new Promise((resolve, reject)=>{
    let result = '';
    setTimeout(() => {
        result = 'prom3';
        resolve(result);
    }, 1000);
});

Promise.all([prom1, prom2, prom3]).then((values) => {
    console.log('All promises: ' +  values);
})
