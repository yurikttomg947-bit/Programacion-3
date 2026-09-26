import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ValidarAccesoService } from './service/validar-acceso';

@Component({
  imports: [FormsModule],
  selector: 'app-validar-acceso',
  styleUrl: './validar-acceso.scss',
  templateUrl: './validar-acceso.html',
})
export class ValidarAcceso {
  edad: number | null = null;
  pago: boolean = false;
  mensaje = signal('');
  permitido = signal(false);

  constructor(private validarAccesoService: ValidarAccesoService) { }

  validar() {
    if (this.edad == null) {
      this.permitido.set(false);
      this.mensaje.set('Ingrese su edad');
      return;
    }

    this.validarAccesoService.validarAcceso({ edad: this.edad, pago: this.pago }).subscribe({
      next: (respuesta) => {
        this.permitido.set(respuesta['permitido']);
        this.mensaje.set(respuesta['mensaje']);
      },
      error: () => {
        this.permitido.set(false);
        this.mensaje.set('No se pudo conectar con el servidor');
      }
    });
  }
}
