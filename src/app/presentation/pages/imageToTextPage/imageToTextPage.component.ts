import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  ChatMessageComponent,
  TypingLoaderComponent,
  TextMessageEvent,
  TextMessageBoxFileComponent,
} from '@components/index';
import { AudioToTextResponse, ImageToTextResponse } from '@interfaces/index';
import { Message } from '@interfaces/message.interface';
import { OpenAiService } from 'app/presentation/services/openai.service';

@Component({
  selector: 'app-image-to-text-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChatMessageComponent,
    TypingLoaderComponent,
    TextMessageBoxFileComponent,
  ],
  templateUrl: './imageToTextPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ImageToTextPageComponent {
  public messages = signal<Message[]>([]);
  public isLoading = signal(false);
  public openAiService = inject(OpenAiService);

  handleMessageWithFile({ prompt, file }: TextMessageEvent) {
    const text = prompt ?? file.name ?? 'Describe la imagen';
    this.isLoading.set(true);

    this.messages.update((prev) => [...prev, { isGpt: false, text: text }]);

    this.openAiService
      .imageToText(file, text)
      .subscribe((resp) => this.handleResponse(resp));
  }

  handleResponse(resp: ImageToTextResponse | null) {
    this.isLoading.set(false);
    if (!resp) return;

    this.messages.update((prev) => [...prev, { isGpt: true, text: resp.msg }]);
  }
}
