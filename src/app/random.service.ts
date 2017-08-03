import { Injectable } from '@angular/core';

@Injectable()
export class RandomService {
    getRandom(start: number, stop: number) {
        let num = Math.floor(Math.random() * (stop - start)) + start;

        return Promise.resolve(num);
    }
}