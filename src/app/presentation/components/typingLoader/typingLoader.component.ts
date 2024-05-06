import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-typing-loader',
  standalone: true,
  template: `
  <div class="typing">
    <span class="circle scaling"></span>
    <span class="circle scaling"></span>
    <span class="circle scaling"></span>
  </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: 'typingLoader.component.scss'
})
export class TypingLoaderComponent {}
