import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DatePipe, DecimalPipe, NgForOf} from "@angular/common";

interface Locale {
  localeCode: string;
  label: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, FormsModule, DatePipe, DecimalPipe, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  currentLanguage = 'en'; // default language
  title = $localize`Hello`;

  constructor() {}

  ngOnInit() {
    const currLanguage = navigator.language || 'en';
    this.currentLanguage = currLanguage.split('-')[0];
  }
}
