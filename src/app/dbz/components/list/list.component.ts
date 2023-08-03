import { Character } from './../../interfaces/character.interface';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListDBZComponent {

 @Input()
 public characterList: Character[] = [{
   id: '0',
   name: 'Trunk',
   power: 10
 }]

@Output()
public deleteCharacter: EventEmitter<string>= new EventEmitter();



onDeleteCharacter(uuid: string):void {
  //TODO: Emitir el ID del personaje
  console.log({uuid});
  this.deleteCharacter.emit(uuid);
}


}
