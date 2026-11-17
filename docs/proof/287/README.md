# Falha de envio no recorte de imagem

Storybook do DS (`Patterns/Editor` → `ImageCropUploadError`), Chrome headless, 720 px, DPR 1.
A story abre o `ImageCropDialog` com um `onCropComplete` que rejeita.

Depois de clicar em Salvar:

|        | Recorte | Salvar       | Aviso                                              |
| ------ | ------- | ------------ | -------------------------------------------------- |
| Antes  | some    | desabilitado | imagem incompatível                                |
| Depois | mantido | habilitado   | Não foi possível enviar a imagem. Tente novamente. |

- `depois-720.png` — recorte mantido, aviso de envio e Salvar disponível.
