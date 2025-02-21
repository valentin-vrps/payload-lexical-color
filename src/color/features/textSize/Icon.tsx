import React, { useEffect, useState } from 'react';
import { useLexicalComposerContext } from '@payloadcms/richtext-lexical/lexical/react/LexicalComposerContext';
import { COMMAND_PRIORITY_CRITICAL, SELECTION_CHANGE_COMMAND } from '@payloadcms/richtext-lexical/lexical';
import { $getSelectionStyleValueForProperty, $patchStyleText } from '@payloadcms/richtext-lexical/lexical/selection';
import { ALargeSmall } from 'lucide-react';
import { UPDATE_TEXT_SIZE } from './command';
import getSelection from '../getSelection';

export default function Icon(): React.JSX.Element {
	const [ size, setSize ] = useState<string>('');
	const [ editor ] = useLexicalComposerContext();

	const updateCurrentSize = () => {
		const selection = getSelection();

		selection && setSize($getSelectionStyleValueForProperty(selection, 'font-size', ''));

		return false;
	};

	useEffect(() => {
		return editor.registerCommand(
			UPDATE_TEXT_SIZE,
			(payload) => {
				setSize(payload.size);

				editor.update(() => {
					const selection = getSelection();

					selection && $patchStyleText(selection, { 'font-size': payload.size || '' });
				});

				return false;
			},
			COMMAND_PRIORITY_CRITICAL
		);
	}, [ editor ]);

	useEffect(() => {
		setTimeout(() => {
			return editor.read(updateCurrentSize);
		});

		return editor.registerCommand(
			SELECTION_CHANGE_COMMAND,
			updateCurrentSize,
			COMMAND_PRIORITY_CRITICAL
		);
	}, [ editor ]);

	return <ALargeSmall className="icon w-5 h-5" style={{ fontSize: size }} />;
}
