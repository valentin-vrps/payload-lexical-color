import { createCommand, type LexicalCommand } from '@payloadcms/richtext-lexical/lexical';

export const UPDATE_TEXT_SIZE: LexicalCommand<{ size: string }> = createCommand('UPDATE_TEXT_SIZE');
