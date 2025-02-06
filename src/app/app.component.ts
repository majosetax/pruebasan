import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'poker-pragma';
  showSplashScreen = true;

  constructor(private readonly router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.showSplashScreen = false;
      this.router.navigate(['/create-game']);
    }, 2000);
  }
}
