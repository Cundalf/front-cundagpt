import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-chat-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chatMessage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatMessageComponent {
  @Input({ required: true })
  public isUser: boolean = false;

  @Input({ required: true })
  public iconLetter: string = '';

  @Input({ required: true })
  public text: string = '';
}