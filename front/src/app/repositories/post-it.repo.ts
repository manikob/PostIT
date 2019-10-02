import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PostItDto } from '../dto/postit.interface';
import { api } from '../util/api';
import { Paged } from '../dto/paged.type';

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
}