import { Component } from '@angular/core';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

@Component({
  selector: 'rst-loader',
  standalone: true,
  imports: [ProgressSpinnerModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {

}
