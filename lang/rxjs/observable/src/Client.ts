import {myObservable} from './Obs';
import {Subject} from 'rxjs'
import {takeUntil} from 'rxjs/operators';

let unsubscribe$: Subject<void> = new Subject<void>();

const subscription1 = myObservable.pipe(takeUntil(unsubscribe$)).subscribe(
    (value: number) => console.log('1: ' + value),
    (error: any) => console.log(error),
    () => console.log("Done!")
);

const subscription2 = myObservable.subscribe(
    (value: number) => console.log('2: ' + value),
    (error: any) => console.log(error),
    () => console.log("Done!")
);


console.log("Do other things");
// subscription1.unsubscribe();
// subscription2.unsubscribe();
console.log((subscription1.isSubscribed()) ? 's1 is subscribed' : 's1 is not subscribed');
console.log((subscription2.isSubscribed()) ? 's2 is subscribed' : 's2 is not subscribed');