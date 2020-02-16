import { Injectable } from '@angular/core';

import { tap, map } from 'rxjs/operators';

import { PostItRepo } from '../repositories/post-it.repo';
import { HttpStatus } from '../util/http-status.enum';
import { PostItDto } from '../dto/dto';

@Injectable({ providedIn: 'root' })
export class PostItService {

    constructor(private repo: PostItRepo) {
    }

    public create() {
        return this.repo.create()
            .pipe(
                tap(resp => {
                    // do proper action in case of failure. Now it's only loging to standard console
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

    public get(id: number) {
        return this.repo.get(id)
            .pipe(
                tap(resp => {
                    if (resp.status != HttpStatus.OK) console.log(resp);
                }),
                map(resp => resp.body)
            );
    }

    public delete(id: number) {
        return this.repo.delete(id)
            .pipe(
                tap(resp => {
                    if (resp.status != HttpStatus.OK) console.log(resp);
                }),
                map(resp => resp.body)
            );
    }

    public save(dto: PostItDto) {
        return this.repo.save(dto)
            .pipe(
                tap(resp => {
                    if (resp.status != HttpStatus.OK) console.log(resp);
                }),
                map(resp => resp.body)
            );
    }
}