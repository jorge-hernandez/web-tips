function worker( time ){
    return new Promise(resolve => {
        let result = '--';
        setTimeout( () => {
            result = time + ' ms';
            resolve(result);
        }, time);
    });
}

async function call( time ){
    console.log('async Calling');
    let result = await worker(time);
    console.log(result);
}

  
call(3000);
call(1000);