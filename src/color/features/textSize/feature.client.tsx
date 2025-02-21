'use client';

import { createClientFeature } from '@payloadcms/richtext-lexical/client';
import { $getSelectionStyleValueForProperty } from '@payloadcms/richtext-lexical/lexical/selection';
import Dropdown from '../../components/Dropdown';
import Icon from './Icon';
import { UPDATE_TEXT_SIZE } from './command';
import { SizeDropdownGroup, SizeFeatureProps } from './types';
import getSelection from '../getSelection';

export default createClientFeature<SizeFeatureProps>(({ props }) => {
	const groups: SizeDropdownGroup[] = [
		{
			type: 'dropdown',
			ChildComponent: Icon,
			isEnabled({ selection }) {
				return !!getSelection(selection);
			},
			items: [
				{
					...props,
					Component: Dropdown,
					key: 'textSize',
					command: UPDATE_TEXT_SIZE,
					current() {
						const selection = getSelection();

						return selection ? $getSelectionStyleValueForProperty(selection, 'font-size', '') : null;
					},
				},
			],
			key: 'textSizeDropdown',
			order: 60,
		},
	];

	return {
		enableFormats: ['textSize'],
		toolbarFixed: {
			groups,
		},
		toolbarInline: {
			groups,
		},
	};
});
