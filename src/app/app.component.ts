import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CodeComponent } from './components/code/code.component';
import { AiReviewComponent } from './components/ai-review/ai-review.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    CodeComponent,
    AiReviewComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'amazon-q';
}
