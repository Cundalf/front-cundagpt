import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChatMesageComponent } from '../../components/chat-bubbles/chatMesage/chatMesage.component';

@Component({
  selector: 'app-orthography-page',
  standalone: true,
  imports: [CommonModule, ChatMesageComponent],
  templateUrl: './orthographyPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrthographyPageComponent {}
