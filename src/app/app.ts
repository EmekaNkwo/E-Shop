import { Component, effect, inject, Renderer2, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('ecommerce-app');

  private renderer = inject(Renderer2);

  darkMode = signal<boolean>(this.loadTheme());

  constructor() {
    // ✅ keep body class in sync with signal
    effect(() => {
      if (this.darkMode()) {
        this.renderer.addClass(document.body, 'dark-theme');
        localStorage.setItem('theme', 'dark');
      } else {
        this.renderer.removeClass(document.body, 'dark-theme');
        localStorage.setItem('theme', 'light');
      }
    });

    // // ✅ load theme from localStorage
    // effect(() => {
    //   const theme = localStorage.getItem('theme');
    //   if (theme === 'dark') {
    //     this.darkMode.set(true);
    //   } else {
    //     this.darkMode.set(false);
    //   }
    // });
  }

  toggleDarkMode() {
    this.darkMode.update((d) => !d);
  }
  private loadTheme(): boolean {
    return localStorage.getItem('theme') === 'dark';
  }
}
