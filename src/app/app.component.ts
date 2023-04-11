import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `<h1>Hola Mundo Sin TemplateUrl</h1>`,
  // styleUrls: ['./app.component.css'],
  styles: ['h1 { color: green }'],
})
export class AppComponent {
  title = 'bancolombia';
}
