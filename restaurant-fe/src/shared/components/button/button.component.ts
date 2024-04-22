import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'rst-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() isPrimary: boolean = true
  @Input() text: string | undefined
  @Output() onClick = new EventEmitter()

}
