import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { catchError } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { throwError } from 'rxjs';
import { BadRequestError } from '../common/bad-request-error';
@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: Http, private url: string) { }
    getAll() {
        return this.http.get(this.url)
            .pipe(catchError(this.handleError));
    }
    create(resource) {
        return this.http.post(this.url, JSON.stringify(resource))
            .pipe(catchError(this.handleError));
    }
    update(resource) {
        // return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
        return this.http.put(this.url + '/' + resource.id, JSON.stringify(resource))
            .pipe(catchError(this.handleError));
    }
    delete(id) {
        return this.http.delete(this.url + '/' + id)
            .pipe(catchError(this.handleError));
    }
    private handleError(error: Response) {
        if (error.status === 404)
            return throwError(new NotFoundError(error));
        else if (error.status === 400)
            return throwError(new BadRequestError(error));
        return throwError(new AppError(error));
    }
}
