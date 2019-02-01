import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Pug } from '../interfaces/pug';
import { PugNameGenerator } from './pug-name-generator';

@Injectable({
  providedIn: 'root'
})
export class PugNameService {
  public pugList$ = new BehaviorSubject<Pug[]>([]);

  constructor() {
    if (localStorage) {
      const pugsJSON = localStorage.getItem('pugs');
      if (localStorage.getItem('pugs') === null) {
        // const localPugs = [
        //   {name: 'Shooster', img: 'assets/pugs/pug1.png'},
        //   {name: 'Cletus', img: 'assets/pugs/pug0.png'},
        //   {name: 'Samson', img: 'assets/pugs/pug1.png'}];
        // localStorage.setItem('pugs', JSON.stringify(localPugs));
        localStorage.setItem('pugs', JSON.stringify([]));
      }
      const pugs = JSON.parse(pugsJSON);
      this.pugList$.next(pugs || []);
    }
  }

  earnPug(): string {
    const PUG_ICON_COUNT = 6; // # of pug icons in Assets
    console.log('Earned new pug!');
    const pugsJSON = localStorage.getItem('pugs');
    const pugs: Pug[] = JSON.parse(pugsJSON);
    const pugImgNum = Math.floor(Math.random() * PUG_ICON_COUNT);
    const pugImgName = 'assets/pugs/pug' + pugImgNum + '.png';
    const pugName = PugNameGenerator.generateName();
    pugs.push(<Pug>{ name: pugName, img: pugImgName });
    localStorage.setItem('pugs', JSON.stringify(pugs));

    this.pugList$.next(pugs);
    return pugName;
  }

  clearPugs() {
    localStorage.setItem('pugs', JSON.stringify([]));
    this.pugList$.next([]);
  }

}
