import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { api } from '../util/api';
import { Paged } from '../dto/paged.type';
import { PostItDto } from '../dto/dto';

@Injectable({ providedIn: 'root' })
export class PostItRepo {

    constructor(private http: HttpClient) {
    }

    public create() {
        return this.http.post<PostItDto>(api.postIt.create, {}, { observe: 'response' });
    }

    public getAll() {

        const params = new HttpParams()
            .set('page', "0")
            .set('size', "999")
            .set('sort', 'id,asc');

        return this.http.get<Paged<PostItRepo>>(api.postIt.getAll, { observe: 'response', params: params })
    }

    public get(id: number) {
        return this.http.get<PostItDto>(api.postIt.get.replace('{id}', `${id}`), { observe: 'response' });
    }

    public delete(id: number) {
        return this.http.delete(api.postIt.delete.replace('{id}', `${id}`), { observe: 'response' });
    }

    public save(dto: PostItDto) {
        return this.http.put<PostItDto>(api.postIt.update, dto, { observe: 'response' });
    }
}