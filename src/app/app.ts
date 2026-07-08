import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DatePipe, CurrencyPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal($localize`angular-i18n`);
  protected readonly today = new Date();
  protected readonly amount = 100000000;
  protected readonly links = [
    {
      title: $localize`Explore the Docs`,
      link: 'https://angular.dev',
    },
    {
      title: $localize`Learn with Tutorials`,
      link: 'https://angular.dev/tutorials',
    },
    {
      title: $localize`Prompt and best practices for AI`,
      link: 'https://angular.dev/ai/develop-with-ai',
    },
    {
      title: $localize`CLI Docs`,
      link: 'https://angular.dev/tools/cli',
    },
    {
      title: $localize`Angular Language Service`,
      link: 'https://angular.dev/tools/language-service',
    },
    {
      title: $localize`Angular DevTools`,
      link: 'https://angular.dev/tools/devtools',
    },
  ];
}
