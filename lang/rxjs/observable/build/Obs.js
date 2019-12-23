"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const fs_1 = require("fs");
exports.myObservable = rxjs_1.Observable.create((observer) => {
    let value = 0;
    const iterval = setInterval(() => {
        const file = fs_1.readFileSync('./signal.txt', 'utf-8');
        let running = JSON.parse(file).running;
        if (running)
            observer.next(value);
        else
            observer.complete();
        value++;
    }, 1000);
    return () => clearInterval(iterval);
});
