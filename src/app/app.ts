import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'Landing Page de Diego Ramírez';

  contactar(): void {
    window.location.href = `mailto:diego_3041220217@utd.edu.mx?subject=Consulta desde ${this.title}`;
    console.log('Se ha intentado contactar por correo electrónico.');
  }
}
