import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReportsTableComponent } from './reports/reports-table/reports-table.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ReportsTableComponent,
    CommonModule,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'MESPractice';
}
