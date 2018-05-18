import { Observable } from 'rxjs';
import 'rxjs/add/observable/throw';
export function ErrorHandler(err: any): Observable<any> {
    if (err instanceof Error) {
        throw err.message;
    }
    throw err;
}
