import { Observable } from "rxjs";
import { Observer }   from "rxjs";
import { readFileSync } from 'fs';

export const myObservable = Observable.create((observer:Observer<number>) => {
    let value = 0;
    const iterval = setInterval(() => {
        const file = readFileSync('./signal.txt', 'utf-8');
        let running = JSON.parse(file).running;
        if(running) observer.next(value);
        else observer.complete();
        value++;
    },1000)
    return() => clearInterval(iterval)
});

