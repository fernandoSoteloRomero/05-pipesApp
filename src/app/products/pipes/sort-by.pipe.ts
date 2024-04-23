import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../intefaces/hero.interface';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(heroes: Hero[], sortBy: keyof Hero | '', desc: boolean): Hero[] {
    
    console.log({ heroes, sortBy, desc });

    switch (sortBy) {
      case 'name':
        if(desc){
          return heroes.sort( (a , b) => a.name > b.name ? 1: -1 );
        } else {
          return heroes.sort( (a , b) => a.name < b.name ? 1: -1 );
        }
      case 'canFly':
        if(desc){
          return heroes.sort( (a , b) => a.canFly > b.canFly ? 1: -1 );
        } else {
          return heroes.sort( (a , b) => a.canFly < b.canFly ? 1: -1 );
        }
      case 'color':
        if(desc){
          return heroes.sort( (a , b) => a.color > b.color ? 1: -1 );
        }else {
          return heroes.sort( (a , b) => a.color < b.color ? 1: -1 );
        }

      default:
        return heroes;
    }


  }

}
