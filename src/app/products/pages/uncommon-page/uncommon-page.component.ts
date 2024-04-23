import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  // i18n Select
  public name: string = 'Fernando';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient(): void{
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // i18Plural
  public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Eduardo'];
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 esperando.',
    'other': 'tenemos # clientes esperando.',
  }


  deleteClient(): void {
    this.clients.shift();
  }

  //keyValue pipe
  public person = {
    name: 'Fernando',
    age: 24,
    city: 'Juarez'
  }


  //Async Pipe
  public myObservableTimer = interval(2000).pipe(
    tap(value => console.log(value))
  );


  public promiseValue: Promise<string> = new Promise( (resolve) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa')
    }, 3500);
  }) 

}
