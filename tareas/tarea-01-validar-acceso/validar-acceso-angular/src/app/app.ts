import { Component } from '@angular/core';
import { ValidarAcceso } from './validar-acceso/validar-acceso';

@Component({
  imports: [ValidarAcceso],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
}
