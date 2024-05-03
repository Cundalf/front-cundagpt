import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-chat-mesage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chatMesage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatMesageComponent {
  @Input({ required: true })
  public isUser: boolean = false;

  @Input({ required: true })
  public iconLetter: string = '';

  @Input({ required: true })
  public text: string = '';
}
