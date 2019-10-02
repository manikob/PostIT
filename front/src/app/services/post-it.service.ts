import { Injectable } from '@angular/core';

import { tap, map } from 'rxjs/operators';

import { PostItRepo } from '../repositories/post-it.repo';
import { HttpStatus } from '../util/http-status.enum';

@Injectable({ providedIn: 'root' })
export class PostItService {

    constructor(private repo: PostItRepo) {
    }

    public create() {
        return this.repo.create()
            .pipe(
                tap(resp => {
                    if (resp.status != HttpStatus.OK) console.log(resp);
                }),
                map(resp => resp.body)
            );
    }

    public getAll() {
        return this.repo.getAll()
            .pipe(
                tap(resp => {
                    if (resp.status != HttpStatus.OK) console.log(resp);
                }),
                map(resp => resp.body),
                map(page => page.content)
            );
    }
}