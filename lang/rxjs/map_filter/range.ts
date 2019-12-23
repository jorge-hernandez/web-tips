import { Observable, range } from 'rxjs';
import { map, filter} from 'rxjs/operators';

const source$ : Observable<number> = range(0,10);

source$.pipe(
    map(x => x * 2),
    filter(x=> x % 3 === 0)
).subscribe(x => console.log(x));