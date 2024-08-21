import { ImageToTextResponse } from '@interfaces/image-text.response';
import { environment } from 'environments/environment';

export const imageToTextUseCase = async (image: File, prompt?: string) => {
  try {
    const formData = new FormData();
    formData.append('file', image);

    if (prompt) {
      formData.append('prompt', prompt);
    }

    const resp = await fetch(
      `${environment.backendApi}/extract-text-from-image`,
      {
        method: 'POST',
        body: formData,
      }
    );

    const data = (await resp.json()) as ImageToTextResponse;

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
