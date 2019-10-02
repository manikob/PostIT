import { AbstractDto } from './abstract.interface';

export interface PostItDto extends AbstractDto {
    content: string;
}