import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { debugOutputAstAsTypeScript } from '@angular/compiler';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
})
export class AddCharacterComponent {
  @Output()
  public onNewCharcter: EventEmitter<Character> = new EventEmitter();

  public character: Character = { name: '', power: 0 };

  emitCharacter(): void {
    console.log(this.character);
    if (this.character.name.length == 0) return;

    this.onNewCharcter.emit(this.character);

    this.character = { name: '', power: 0 };
  }
}
