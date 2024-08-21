import { Injectable } from '@angular/core';
import { audioToTextUseCase, createThreadUseCase, orthographyUseCase, postQuestionUseCase, prosConsStreamUseCase, prosConsUseCase, translateTextUseCase } from '@use-cases/index';

import { from, Observable, of, tap } from 'rxjs';
import { textToAudioUseCase } from '../../core/use-cases/audios/text-to-audio.use-case';

@Injectable({ providedIn: 'root' })
export class OpenAiService {
  checkOrthography(prompt: string) {
    return from(orthographyUseCase(prompt));
  }

  prosConsDiscusser(prompt: string) {
    return from(prosConsUseCase(prompt));
  }

  prosConsStreamDiscusser(prompt: string, abortSignal: AbortSignal) {
    return prosConsStreamUseCase(prompt, abortSignal);
  }

  translateText(prompt: string, lang: string) {
    return from(translateTextUseCase(prompt, lang));
  }

  textToAudio(prompt: string, voice: string) {
    return from(textToAudioUseCase(prompt, voice));
  }

  createThread(): Observable<string> {
    if (localStorage.getItem('thread')) {
      return of(localStorage.getItem('thread')!);
    }

    return from(createThreadUseCase()).pipe(
      tap((thread: string) => {
        localStorage.setItem('thread', thread);
      })
    );
  }

  postQuestion(threadId: string, question: string) {
    return from(postQuestionUseCase(threadId, question));
  }

  audioToText(file: File, prompt?: string) {
    return from(audioToTextUseCase(file, prompt));
  }
}
