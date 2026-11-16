import type { DesabafosCommentInput } from "./desabafos-comment-input.js";
import type { DesabafosCommentView } from "./desabafos-comment-view.js";
import type { DesabafosCommentsState } from "./desabafos-comments-state.js";
import type { DesabafosReactionOffered } from "./desabafos-reaction-offered.js";
import type { DesabafoPostView } from "./desabafo-post-view.js";

/** O card de um desabafo na linha do tempo: desenha o texto, o apoio contado e, quando aberto,
 * as acolhidas. A listagem de quem apoiou não existe — as contagens são o teto do que se mostra. */
export type DesabafosCardProps = {
  post: DesabafoPostView;
  commentsOpen: boolean;
  comments: DesabafosCommentView[];
  commentsState: DesabafosCommentsState;
  onToggleComments: () => void;
  onReact: (reaction: DesabafosReactionOffered) => void;
  onUnreact: () => void;
  onRemove: () => void;
  onComment: (input: DesabafosCommentInput) => Promise<void>;
  onRemoveComment: (commentId: string) => void;
};
